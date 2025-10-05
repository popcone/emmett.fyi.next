'use client'
import { motion } from 'motion/react'
import { Projects } from '@/components/projects'
import { PROJECTS, SERVICES } from '../lib/sample-data'
import { TextEffect } from '@/components/ui/text-effect'

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
  return (
    <motion.main
      className="space-y-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center">
        <img
          src="/em-portrait.jpg"
          className="inline-block size-24 rounded-full object-cover object-[75%] outline-1 -outline-offset-1 outline-black/5 sm:size-48 dark:outline-white/10"
          alt="Profile"
        />
      </div>
      <div className="space-y-2.5">
        <TextEffect
          as="h1"
          preset="fade"
          per="char"
          className="text-center text-2xl font-semibold text-zinc-600 sm:text-3xl dark:text-zinc-500"
          delay={0.5}
        >
          Frontend Web Engineer
        </TextEffect>
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <div>
            <div className="flex flex-1 items-center justify-center gap-4">
              {SERVICES.map((service, serviceIndex) => {
                return (
                  <span
                    key={`${serviceIndex}-${service.name}`}
                    className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
                    style={{
                      backgroundColor: `${service.color}1a`,
                    }}
                  >
                    <svg
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                      className="size-2"
                      style={{
                        fill: service.color ?? '#000000',
                      }}
                    >
                      <circle r={3} cx={3} cy={3} />
                    </svg>
                    {service.name}
                  </span>
                )
              })}
            </div>
          </div>
        </motion.section>
      </div>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-wrap justify-center gap-6 space-x-2">
          {PROJECTS.map((project, projectIndex) => (
            <div className="relative" key={`${projectIndex}-${project.name}`}>
              <Projects project={project} />
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
