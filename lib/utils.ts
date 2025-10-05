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
