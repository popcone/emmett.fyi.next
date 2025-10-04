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
import clsx from 'clsx'

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
      <MorphingDialogContainer
        className={clsx(`overflow-y-auto`, {
          'items-start py-12': project.images,
        })}
      >
        <MorphingDialogContent className="dark:bg-ring-zinc-800/50 relative rounded-2xl bg-[#EFF3F5]/80 p-1 py-8 ring-1 ring-inset dark:bg-[#0D0D0D]/80">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-4 text-base/7">
              <div
                className="w-fit rounded-md px-2 py-1 font-semibold text-white"
                style={{
                  backgroundColor: `${service?.color}`,
                }}
              >
                {service?.name}
              </div>
              <h1 className="flex-1 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl dark:text-white">
                {project.name}
              </h1>
              <button
                className="flex w-fit cursor-pointer items-center gap-2 py-1 text-2xl text-gray-700 hover:underline dark:text-gray-300"
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
              <p className="text-xl/8">{project.description}</p>
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
              <div className="flex flex-wrap justify-center gap-2">
                {project.images &&
                  project.images?.map((image, imageIndex) => (
                    <img
                      src={`/test/${image}`}
                      alt={project.name}
                      className="aspect-video object-contain"
                      key={'project-image-' + imageIndex}
                    />
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
