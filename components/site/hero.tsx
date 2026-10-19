'use client'

import Image from 'next/image'
import { ArrowUpRight, Phone } from 'lucide-react'
import { contacts } from '@/lib/content'
import { useLanguage } from '@/lib/i18n'

export function Hero() {
  const { t } = useLanguage()
  const content = t.heroSection

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy text-navy-foreground"
    >
      <Image
        src="/images/hero-truck.png"
        alt={content.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy-foreground/[0.04] [clip-path:polygon(0_0,58%_0,32%_100%,0_100%)]"
      />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 md:px-10">
        <h1 className="mt-8 font-heading text-[2rem] font-extrabold uppercase leading-[1] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {content.title}
          <br />
          {content.titleLine2}
          <br />
          <span className="text-slate-accent">{content.titleAccent}</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
          {content.description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#order"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-navy-foreground px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy-foreground/90"
          >
            {content.order}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <a
            href={contacts.phoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-navy-foreground/50 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider transition-colors hover:border-navy-foreground hover:bg-navy-foreground/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            {contacts.phone}
          </a>
        </div>
      </div>
    </section>
  )
}