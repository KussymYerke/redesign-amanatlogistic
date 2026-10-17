
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      className={cn('flex items-center gap-3', className)}
      aria-label="Amanat Logistic — на главную"
    >
      <Image
        src="/images/logo.JPG.jpeg"
        alt="Amanat Logistic"
        width={48}
        height={48}
        priority
        className="h-9 w-auto object-contain"
      />

      <span className="font-heading text-lg font-extrabold uppercase leading-[0.95] tracking-tight">
        Amanat
        <br />
        Logistic
      </span>
    </a>
  )
}
