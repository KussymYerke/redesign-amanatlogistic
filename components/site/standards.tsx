'use client'

import { useLanguage } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

export function Standards() {
  const { t } = useLanguage()
  const content = t.standardsSection

  return (
    <section className="bg-muted py-20 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          index="05"
          eyebrow={content.eyebrow}
          title={content.title}
          titleMuted={content.titleMuted}
          lead={content.lead}
        />

        <ul className="grid gap-12 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {content.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 border-t border-slate-accent/50 pt-8"
            >
              <h3 className="font-heading text-xl font-bold">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}