import { getProjects, getTechnologies } from '@/lib/data'
import { Project } from '@/lib/definitions'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const [projectsResult, technologiesResult] = await Promise.allSettled([
      getProjects(),
      getTechnologies(),
    ])

    const projects =
      projectsResult.status === 'fulfilled' ? projectsResult.value : []
    const technologies =
      technologiesResult.status === 'fulfilled' ? technologiesResult.value : []

    if (!projects || projects.length === 0) {
      throw new Error('No projects found')
    }

    if (!technologies || technologies.length === 0) {
      throw new Error('No technologies found')
    }

    const technologyMap = new Map(technologies.map((t: any) => [t?.id, t]))

    const reshapeProjects = projects.map((project: Record<string, any>) => {
      const projectTechnologyNames = (project?.technologies ?? [])
        .map((relation: Record<string, any>) => {
          const relationTechnology = relation?.portfolio_technologies_id

          if (relationTechnology && typeof relationTechnology === 'object') {
            return (
              relationTechnology.technology ??
              relationTechnology.name ??
              relationTechnology.title ??
              null
            )
          }

          const relationTechnologyId =
            relationTechnology ?? relation?.technology_id ?? relation?.id
          if (relationTechnologyId == null) return null

          const foundTechnology = technologyMap.get(relationTechnologyId) as any
          if (!foundTechnology) return null

          return (
            foundTechnology.technology ??
            foundTechnology.name ??
            foundTechnology.title ??
            null
          )
        })
        .filter(Boolean)

      const sortedProjectTechnologyNames = projectTechnologyNames.sort(
        (a: string, b: string) => a.localeCompare(b),
      )

      return {
        ...project,
        technologies: sortedProjectTechnologyNames,
      }
    })

    return NextResponse.json({
      projects: reshapeProjects,
    })
  } catch (error) {
    console.error(
      error instanceof Error
        ? error.message
        : 'There was an error fetching the projects',
    )

    return NextResponse.json({
      projects: [],
      error: 'There was an error retrieving the projects',
    })
  }
}
