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
import { isVideoFile } from '@/lib/utils'

type ProjectsProps = {
  project: Project
}

export function Projects({ project }: any) {
  const {
    title,
    role,
    description,
    link,
    images,
    technologies,
    highlights,
    category,
  } = project
  const service = SERVICES.find(
    (service) => service.name === category.category,
  ) as Service
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
        <EyeIcon className="size-3" style={{ color: `${category?.color}` }} />{' '}
        {title}
      </MorphingDialogTrigger>
      <MorphingDialogContainer
        className={clsx(`overflow-y-auto`, {
          'items-start': images,
        })}
      >
        <MorphingDialogContent className="dark:bg-ring-zinc-800/50 relative rounded-2xl bg-[#EFF3F5]/80 p-1 py-8 ring-1 ring-inset dark:bg-[#0D0D0D]/80">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-6 text-base/7">
              {/* Header */}
              <div
                className="w-fit rounded-md border px-2 py-1 text-sm font-semibold text-white"
                style={{
                  borderColor: `${category?.color}1a`,
                  backgroundColor: `${category?.color}1a`,
                  color: `${category?.color}`,
                }}
              >
                {category?.category}
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
                      color: `${category?.color}`,
                    }}
                  >
                    Visit
                    <span className="text-gray-500">
                      <SquareArrowOutUpRightIcon
                        className="size-4"
                        style={{
                          color: `${category?.color}`,
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
                    {role}
                  </span>
                </div>
                <p className="text-xl/8">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology: any, technologyIndex: any) => (
                    <span
                      key={technologyIndex}
                      className="rounded-full bg-gray-900 px-4 py-1 text-xs font-medium text-gray-300 dark:bg-gray-300 dark:text-gray-900"
                    >
                      {technology}
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
                  {highlights?.map((highlight: any, highlightIndex: any) => (
                    <div key={highlightIndex} className="px-4 py-5 sm:p-6">
                      <dt className="text-base font-normal text-gray-900 dark:text-gray-100">
                        {highlight.highlight}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
              {/* Images */}
              <div className="mt-12 flex flex-wrap justify-center space-y-6">
                {images &&
                  images.map((image: any, imageIndex: number) =>
                    isVideoFile(image.image_url) ? (
                      <video
                        key={`project-video-${imageIndex}`}
                        src={image.image_url}
                        muted
                        loop
                        controls
                        playsInline
                        className="aspect-video w-full rounded-xl object-cover object-top"
                      />
                    ) : (
                      <img
                        key={`project-image-${imageIndex}`}
                        src={image.image_url}
                        className="aspect-video w-full rounded-xl object-cover object-top"
                        alt={`Project image ${imageIndex + 1}`}
                      />
                    ),
                  )}
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
