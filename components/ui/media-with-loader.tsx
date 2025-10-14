'use client'

import { useState } from 'react'

import { cn, isVideoFile } from '@/lib/utils'

type MediaProps = {
  src: string
  alt?: string
  isVideo?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  playsInline?: boolean
  className?: string
}

export function Media({
  src,
  alt,
  isVideo,
  autoPlay,
  loop,
  muted,
  controls,
  playsInline,
  className,
}: MediaProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const isVideoMedia = typeof isVideo === 'boolean' ? isVideo : isVideoFile(src)

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-xl',
        className,
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-800" />
      )}
      {isVideoMedia ? (
        <video
          src={src}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          autoPlay={autoPlay}
          muted={muted ?? true}
          loop={loop ?? true}
          controls={controls ?? true}
          playsInline={playsInline ?? true}
          className="absolute inset-0 size-full object-cover object-top"
          aria-label={alt ?? 'portfolio video'}
        />
      ) : (
        <img
          src={src}
          alt={alt ?? 'portfolio image'}
          onLoad={() => setIsLoaded(true)}
          className="absolute inset-0 size-full object-cover object-top"
        />
      )}
    </div>
  )
}
