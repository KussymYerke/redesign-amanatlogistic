'use client'
import Image from 'next/image'
import { Clock, Calculator, ShieldCheck } from 'lucide-react'

import { ContactForm } from '@/components/site/contact-form'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { SectionHeading } from '@/components/site/section-heading'
import { useLanguage } from '@/lib/i18n'

const benefitIcons = [Clock, Calculator, ShieldCheck]

export default function OrderPage() {
  const { t } = useLanguage()
  const content = t.orderPage

  return (
    <>
      <SiteHeader />

      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <SectionHeading
            index="06"
            eyebrow={content.eyebrow}
            title={content.title}
            titleMuted={content.titleMuted}
            lead={content.lead}
          />

          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Image with floating badges */}
            <div className="relative order-1 min-h-[280px] overflow-hidden rounded-3xl lg:order-2 lg:min-h-full">
              <Image
                src="/images/order-fleet.jpg"
                alt={content.truckAlt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-foreground shadow-lg backdrop-blur">
                  {content.coverage}
                </div>

                <div className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-foreground shadow-lg backdrop-blur">
                  {content.availability}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index]

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
