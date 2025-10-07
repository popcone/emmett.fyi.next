import { getProjects, getTechnologies } from '@/lib/data'
import { NextResponse } from 'next/server'

export async function GET() {
  const projects = await getProjects()
  const technologies = await getTechnologies()

  const reshapedProjects = projects.map((project: Record<string, any>) => {
    const projectTechnologyNames = (project?.technologies ?? [])
      .map((relation: any) => {
        const relationTechnology = relation?.portfolio_technologies_id
        // If the relation expands the technology object, read its name field
        if (relationTechnology && typeof relationTechnology === 'object') {
          return (
            relationTechnology.technology ??
            relationTechnology.name ??
            relationTechnology.title ??
            null
          )
        }
        // If the relation contains just an ID, resolve it from the fetched technologies list
        const relationTechnologyId =
          relationTechnology ?? relation?.technology_id ?? relation?.id
        if (relationTechnologyId == null) return null
        const foundTechnology = technologies.find(
          (t: any) => t?.id === relationTechnologyId,
        )
        if (!foundTechnology) return null
        return (
          foundTechnology.technology ??
          foundTechnology.name ??
          foundTechnology.title ??
          null
        )
      })
      .filter(Boolean)

    return {
      ...project,
      technologies: projectTechnologyNames,
    }
  })
  return NextResponse.json({ projects: reshapedProjects })
}
