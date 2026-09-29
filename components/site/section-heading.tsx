import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  titleMuted?: string
  lead?: string
  link?: { label: string; href: string }
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  titleMuted,
  lead,
  link,
  tone = 'light',
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              'font-heading text-xs font-semibold tracking-[0.2em]',
              dark ? 'text-slate-accent' : 'text-slate-accent',
            )}
          >
            {index}
          </span>
          <span
            className={cn(
              'font-heading text-xs font-bold uppercase tracking-[0.2em]',
              dark ? 'text-navy-foreground' : 'text-primary',
            )}
          >
            {eyebrow}
          </span>
          <span
            aria-hidden="true"
            className={cn('h-px w-24 md:w-36', dark ? 'bg-navy-foreground/25' : 'bg-slate-accent/50')}
          />
        </div>
        <h2
          className={cn(
            'font-heading text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-balance md:text-5xl',
            dark ? 'text-navy-foreground' : 'text-foreground',
          )}
        >
          {title}
          {titleMuted ? (
            <>
              <br />
              <span className="text-slate-accent">{titleMuted}</span>
            </>
          ) : null}
        </h2>
      </div>
      {lead || link ? (
        <div className="flex flex-col items-start gap-5 md:pt-10">
          {lead ? (
            <p
              className={cn(
                'text-lg leading-relaxed text-pretty md:text-xl',
                dark ? 'text-navy-foreground/80' : 'text-foreground/80',
              )}
            >
              {lead}
            </p>
          ) : null}
          {link ? <ArrowLink href={link.href} label={link.label} tone={tone} /> : null}
        </div>
      ) : null}
    </div>
  )
}

export function ArrowLink({
  href,
  label,
  tone = 'light',
}: {
  href: string
  label: string
  tone?: 'light' | 'dark'
}) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center gap-3 border-b pb-1.5 text-sm font-semibold transition-colors',
        tone === 'dark'
          ? 'border-navy-foreground/40 text-navy-foreground hover:border-navy-foreground'
          : 'border-foreground text-foreground hover:border-primary hover:text-primary',
      )}
    >
      {label}
      <ArrowUpRight
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  )
}
