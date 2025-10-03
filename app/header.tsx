'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between bg-amber-300">
      <div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-3xl font-bold text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Frontend Engineer
        </TextEffect>
      </div>
    </header>
  )
}
