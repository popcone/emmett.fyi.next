import clsx from 'clsx'

import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from './ui/morphing-dialog'
import { EyeIcon, SquareArrowOutUpRightIcon, XIcon } from 'lucide-react'

import { CATEGORIES } from '@/lib/sample-data'
import { Category, Project } from '@/lib/definitions'
import { cn, isVideoFile } from '@/lib/utils'
import { Media } from './ui/media-with-loader'

type ProjectsProps = {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 space-x-2 sm:grid-cols-2 md:gap-6">
      {projects.map((project) => {
        const {
          id,
          title,
          role,
          description,
          url,
          url_title,
          images,
          technologies,
          highlights,
          category,
        } = project

        const selectedCategory = CATEGORIES.find(
          (el) => el.name.toLowerCase() === category.name.toLowerCase(),
        ) as Category

        const color = selectedCategory?.color

        return (
          <div className="relative col-span-1 w-full" key={`${id}-${title}`}>
            <MorphingDialog
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              }}
            >
              <MorphingDialogTrigger
                data-id={id}
                className={cn(
                  'flex min-h-20 items-center gap-2 rounded-xs border-l-4 bg-[#E4EFEF] px-6 py-2 hover:bg-[#DCE7E7] dark:bg-[#18201E] dark:hover:bg-[#202826]',
                )}
                aria-label={`Open dialog for ${title}`}
                aria-controls={`dialog-${id}`}
                aria-expanded={false}
                aria-haspopup="dialog"
                aria-role="button"
                style={{
                  borderColor: `${color}`,
                }}
              >
                {title}
              </MorphingDialogTrigger>
              <MorphingDialogContainer
                className={clsx(`overflow-y-auto`, {
                  'items-start': images,
                  'items-start md:items-center': !images,
                })}
              >
                <MorphingDialogContent className="dark:bg-ring-zinc-800/50 relative rounded-md bg-[#E4EFEF]/80 p-1 py-8 dark:bg-[#18201E]/80">
                  <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl space-y-6 text-base/7">
                      {/* Header */}
                      <div
                        className="w-fit rounded-md border px-2 py-1 text-sm font-semibold text-white"
                        style={{
                          borderColor: `${color}1a`,
                          backgroundColor: `${color}1a`,
                          color: `${color}`,
                        }}
                      >
                        {selectedCategory?.name}
                      </div>
                      <div className="space-y-2">
                        <h2 className="w-fit text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl dark:text-white">
                          {title}
                        </h2>
                        {url && (
                          <button
                            className="flex w-fit cursor-pointer items-center gap-2 text-gray-700 hover:underline dark:text-gray-300"
                            onClick={() => window.open(url, '_blank')}
                            style={{
                              color: `${color}`,
                            }}
                            type="button"
                            aria-label={`Visit ${url_title}`}
                          >
                            Visit {url_title}
                            <span className="text-gray-500">
                              <SquareArrowOutUpRightIcon
                                className="size-4"
                                style={{
                                  color: `${color}`,
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
                          {technologies.map(
                            (technology: any, technologyIndex: any) => (
                              <span
                                key={technologyIndex}
                                className="rounded-full bg-gray-900 px-4 py-1 text-xs font-medium text-gray-300 dark:bg-gray-300 dark:text-gray-900"
                                aria-label={`Technology ${technology}`}
                              >
                                {technology}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                      {/* Highlights */}
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                          Highlights
                        </h3>
                        <dl className="mt-5 grid grid-cols-1 divide-slate-200 overflow-hidden rounded-lg ring-1 ring-slate-200 ring-inset md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-slate-800/50 dark:ring-1 dark:ring-slate-800/50 dark:ring-inset">
                          {highlights?.map(
                            (highlight: any, highlightIndex: any) => (
                              <div
                                key={highlightIndex}
                                className="px-4 py-5 sm:p-6"
                              >
                                <dt className="text-base font-normal text-gray-900 dark:text-gray-100">
                                  {highlight.highlight}
                                </dt>
                              </div>
                            ),
                          )}
                        </dl>
                      </div>
                      {/* Images */}
                      <div className="mt-12 flex flex-wrap justify-center space-y-6">
                        {images &&
                          images.map((image: any, imageIndex: number) => (
                            <Media
                              key={`project-media-${imageIndex}`}
                              src={image.image_url}
                              alt={`Project media ${imageIndex + 1}`}
                              isVideo={isVideoFile(image.image_url)}
                              controls
                              playsInline
                              className="w-full"
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
          </div>
        )
      })}
    </div>
  )
}
