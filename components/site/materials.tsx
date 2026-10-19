'use client'

import Image from 'next/image'
import { materials } from '@/lib/content'
import { useLanguage } from '@/lib/i18n'
import { ArrowLink, SectionHeading } from './section-heading'

export function Materials() {
  const { t } = useLanguage()
  const content = t.materialsSection

  return (
    <section
      id="materials"
      className="scroll-mt-20 bg-background py-20 md:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          index="04"
          eyebrow={content.eyebrow}
          title={content.title}
          titleMuted={content.titleMuted}
          lead={content.lead}
          link={{ label: content.link, href: '#order' }}
        />

        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-sm rounded-br-[4rem]">
          <Image
            src="/images/materials.png"
            alt={content.imageAlt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        <ul className="grid gap-12 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {materials.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 border-t border-border pt-8"
            >
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-accent">
                {item.tag}
              </p>

              <h3 className="font-heading text-2xl font-bold">
                {item.title}
              </h3>

              <p className="leading-relaxed text-muted-foreground">
                {item.text}
              </p>

              <div className="mt-auto pt-2">
                <ArrowLink href="#order" label={content.order} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}