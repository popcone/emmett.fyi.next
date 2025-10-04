import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from './ui/morphing-dialog'
import { SquareArrowOutUpRightIcon, XIcon } from 'lucide-react'
import {
  Project,
  SERVICES,
  Service,
  TECHNOLOGIES,
  Technology,
} from '@/lib/data'

type ProjectsProps = {
  project: Project
}

export function Projects({ project }: ProjectsProps) {
  const service = SERVICES.find(
    (service) => service.id === project.category,
  ) as Service
  const technologies = TECHNOLOGIES.filter((technology: Technology) =>
    project.technologies.includes(technology.id),
  )
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger
        data-id={project.id}
        className="w-fit rounded-lg border border-black px-4 py-1 text-lg dark:border-white"
        style={{
          borderColor: `${service?.color}`,
        }}
      >
        {project.name}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-4 text-base/7">
              <span
                className="rounded-md px-2 py-1 font-semibold text-white"
                style={{
                  backgroundColor: `${service?.color}`,
                }}
              >
                {service?.name}
              </span>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                {project.name}
              </h1>
              <p className="mt-6 text-xl/8">{project.description}</p>
              <button
                className="flex cursor-pointer items-center gap-2 py-1 text-3xl text-gray-700 hover:underline dark:text-gray-300"
                onClick={() => window.open(project.link, '_blank')}
                style={{
                  color: `${service?.color}`,
                }}
              >
                View Production
                <span className="text-gray-500">
                  <SquareArrowOutUpRightIcon
                    className="size-5"
                    style={{
                      color: `${service?.color}`,
                    }}
                  />
                </span>
              </button>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology.id}
                    className="rounded-full bg-gray-900 px-4 py-1 text-xs font-medium text-gray-300 dark:bg-gray-300 dark:text-gray-900"
                    // style={{
                    //   transform: 'skew(-12deg)',
                    // }}
                  >
                    {technology.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
