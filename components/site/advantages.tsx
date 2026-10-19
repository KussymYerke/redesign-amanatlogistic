'use client'

import { Clock, FileText, ShieldCheck, Wrench } from 'lucide-react'

import { contacts } from '@/lib/content'
import { useLanguage } from '@/lib/i18n'
import { ArrowLink, SectionHeading } from './section-heading'

const icons = [Clock, ShieldCheck, FileText, Wrench]

export function Advantages() {
  const { t } = useLanguage()
  const content = t.advantagesSection

  return (
    <section className="bg-navy py-20 text-navy-foreground md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          tone="dark"
          index="02"
          eyebrow={content.eyebrow}
          title={content.title}
          titleMuted={content.titleMuted}
          lead={content.lead}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, i) => {
            const Icon = icons[i]

            return (
              <li
                key={item.title}
                className="flex min-h-64 flex-col justify-between gap-10 rounded-sm rounded-br-[3rem] border border-navy-foreground/10 bg-primary/50 p-7 transition-colors hover:bg-primary"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="size-6 text-slate-accent"
                    aria-hidden="true"
                  />
                  <span className="font-heading text-xs font-semibold text-navy-foreground/60">
                    {`0${i + 1}`}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-lg font-bold uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-foreground/75">
                    {item.text}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <ArrowLink
            tone="dark"
            href="#order"
            label={content.order}
          />
          <ArrowLink
            tone="dark"
            href={contacts.phoneHref}
            label={content.call}
          />
          <ArrowLink
            tone="dark"
            href={contacts.whatsappHref}
            label={content.whatsapp}
          />
        </div>
      </div>
    </section>
  )
}
