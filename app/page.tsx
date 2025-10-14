'use client'
import { motion } from 'motion/react'
import { Projects } from '@/components/projects'
import { TextEffect } from '@/components/ui/text-effect'
import { useEffect, useState } from 'react'
import { Project } from '@/lib/definitions'
import { getBaseUrl } from '@/lib/utils'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function MainPage() {
  //
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [serverError, setServerError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    const baseUrl = getBaseUrl()
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/projects`).then((res) =>
          res.json(),
        )
        if (res.error) {
          console.error(res.error)
          setServerError(res.error)
          setIsLoading(false)
          return
        }
        setProjects(res.projects)
        setIsLoading(false)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error')
        setIsLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    )
  }

  if (error && !serverError) {
    return (
      <div className="flex h-screen items-center justify-center">
        Error: {error}
      </div>
    )
  }

  return (
    <motion.main
      className="space-y-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center">
        <img
          src={process.env.NEXT_PUBLIC_PROFILE_IMAGE}
          className="inline-block size-24 rounded-full object-cover object-[75%] outline-1 -outline-offset-1 outline-black/5 sm:size-48 dark:outline-white/10"
          alt="Profile Image"
        />
      </div>
      <div className="space-y-2.5">
        <TextEffect
          as="h1"
          preset="fade"
          per="char"
          className="text-center text-xl font-semibold text-zinc-600 sm:text-2xl dark:text-zinc-500"
          delay={0.5}
        >
          Projects I've Worked On
        </TextEffect>
        {/* <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <ServiceTabs services={SERVICES} />
        </motion.section> */}
      </div>

      {serverError && <div className="text-center">Error: {serverError}</div>}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <Projects projects={projects} />
      </motion.section>
    </motion.main>
  )
}
