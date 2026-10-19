'use client'

import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { contacts } from '@/lib/content'
import { useLanguage } from '@/lib/i18n'
import { SectionHeading } from './section-heading'

const channelIcons = [Phone, MessageCircle, Mail]

export function OrderCta() {
  const { t } = useLanguage()
  const content = t.orderCta

  const channels = [
    {
      ...content.channels[0],
      icon: channelIcons[0],
      value: contacts.phone,
      href: contacts.phoneHref,
    },
    {
      ...content.channels[1],
      icon: channelIcons[1],
      value: content.channels[1].value,
      href: contacts.whatsappHref,
    },
    {
      ...content.channels[2],
      icon: channelIcons[2],
      value: contacts.email,
      href: `mailto:${contacts.email}`,
    },
  ]

  return (
    <section
      id="order"
      className="scroll-mt-20 bg-background py-20 md:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          index="06"
          eyebrow={content.eyebrow}
          title={content.title}
          titleMuted={content.titleMuted}
          lead={content.lead}
        />

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#order"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-navy"
          >
            {content.order}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <a
            href={contacts.whatsappHref}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
          >
            {content.whatsapp}
          </a>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon

            return (
              <li key={channel.title}>
                <a
                  href={channel.href}
                  className="group flex h-full flex-col gap-6 rounded-sm rounded-br-[2.5rem] bg-navy p-7 text-navy-foreground transition-colors hover:bg-primary"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="size-6 text-slate-accent"
                      aria-hidden="true"
                    />
                    <ArrowUpRight
                      className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-lg font-bold uppercase">
                      {channel.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-navy-foreground/70">
                      {channel.text}
                    </p>
                  </div>

                  <p className="mt-auto border-t border-navy-foreground/15 pt-4 font-heading text-sm font-bold">
                    {channel.value}
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}