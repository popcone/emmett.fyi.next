import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBaseUrl = () => {
  const BASE_URL =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
        ? process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
        : process.env.NEXT_PUBLIC_BASE_URL
  const PROTOCOL =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? 'https'
      : 'http'
  const baseUrl = `${PROTOCOL}://${BASE_URL}`
  return baseUrl
}

export const isVideoFile = (filename: string): boolean => {
  // Handle full URLs, query strings, and hashes gracefully.
  const source = (() => {
    try {
      // If it's a valid URL, use the pathname so queries/hashes don't interfere
      return new URL(filename).pathname
    } catch {
      return filename
    }
  })()

  // Match common video extensions at end of path, optionally followed by query/hash
  const videoPattern = /\.(mp4|mov|avi|webm|mkv|m4v|3gp|flv|wmv)(?:[?#].*)?$/i
  return videoPattern.test(source.trim())
}
