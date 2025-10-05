import clsx from 'clsx'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from './ui/morphing-dialog'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EyeIcon,
  SquareArrowOutUpRightIcon,
  XIcon,
} from 'lucide-react'

import { SERVICES, TECHNOLOGIES } from '@/lib/sample-data'
import { Project, Service, Technology } from '@/lib/definitions'

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
        className="flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-2.5 py-1.5 dark:border-white"
      >
        <EyeIcon className="size-3" style={{ color: `${service?.color}` }} />{' '}
        {project.title}
      </MorphingDialogTrigger>
      <MorphingDialogContainer
        className={clsx(`overflow-y-auto`, {
          'items-start': project.images,
        })}
      >
        <MorphingDialogContent className="dark:bg-ring-zinc-800/50 relative rounded-2xl bg-[#EFF3F5]/80 p-1 py-8 ring-1 ring-inset dark:bg-[#0D0D0D]/80">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-6 text-base/7">
              {/* Header */}
              <div
                className="w-fit rounded-md border px-2 py-1 text-sm font-semibold text-white"
                style={{
                  borderColor: `${service?.color}1a`,
                  backgroundColor: `${service?.color}1a`,
                  color: `${service?.color}`,
                }}
              >
                {service?.name}
              </div>
              <div className="flex items-center gap-2">
                <h2 className="w-fit text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
                  {project.title}
                </h2>
                {project.link && (
                  <button
                    className="flex w-fit cursor-pointer items-center gap-2 text-gray-700 uppercase hover:underline dark:text-gray-300"
                    onClick={() => window.open(project.link, '_blank')}
                    style={{
                      color: `${service?.color}`,
                    }}
                  >
                    Visit
                    <span className="text-gray-500">
                      <SquareArrowOutUpRightIcon
                        className="size-4"
                        style={{
                          color: `${service?.color}`,
                        }}
                      />
                    </span>
                  </button>
                )}
              </div>
              {/* Role and Description */}
              <div className="space-y-6 border-y border-slate-200 py-6 dark:border-slate-800/50">
                <div className="font-semibold">
                  Role:
                  <span className="ml-2 font-normal text-gray-700 dark:text-gray-300">
                    {project.role}
                  </span>
                </div>
                <p className="text-xl/8">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology.id}
                      className="rounded-full bg-gray-900 px-4 py-1 text-xs font-medium text-gray-300 dark:bg-gray-300 dark:text-gray-900"
                    >
                      {technology.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Highlights */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Highlights
                </h3>
                <dl className="mt-5 grid grid-cols-1 divide-slate-200 overflow-hidden rounded-lg ring-1 ring-slate-200 ring-inset md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-slate-800/50 dark:ring-1 dark:ring-slate-800/50 dark:ring-inset">
                  {project?.highlights?.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="px-4 py-5 sm:p-6">
                      <dt className="text-base font-normal text-gray-900 dark:text-gray-100">
                        {highlight}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
              {/* Images */}
              <div className="mt-12 flex flex-wrap justify-center space-y-6">
                {project.images &&
                  project.images?.map((image, imageIndex) => (
                    <img
                      key={'project-image-' + imageIndex}
                      src={`/test/${image}`}
                      alt={project.title}
                      className="aspect-video w-full rounded-xl object-cover object-top"
                    />
                  ))}
              </div>
            </div>
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 size-fit rounded-full border border-slate-700 bg-white/10 p-2 dark:border-white dark:bg-black/10"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="size-5 text-slate-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
