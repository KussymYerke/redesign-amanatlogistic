'use client'

import Image from 'next/image'
import {
  ArrowRight,
  Building2,
  Cog,
  Maximize,
  MoreHorizontal,
  ShoppingCart,
  Layers3,
  Truck,
} from 'lucide-react'

import { cargoTypes } from '@/lib/content'
import { useLanguage } from '@/lib/i18n'
import { ArrowLink, SectionHeading } from './section-heading'

const cargoIcons = [
  Building2,
  Cog,
  Truck,
  Maximize,
  Truck,
  ShoppingCart,
  Layers3,
  MoreHorizontal,
]

export function Cargo() {
  const { t } = useLanguage()
  const cargo = t.cargo

  return (
    <section
      id="cargo"
      className="scroll-mt-20 overflow-hidden bg-background py-20 text-foreground md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          index="03"
          eyebrow={cargo.eyebrow}
          title={cargo.title}
          titleMuted={cargo.titleMuted}
          lead={cargo.lead}
          link={{
            label: cargo.calculate,
            href: '#order',
          }}
        />

        {/* Steps */}
        <ol className="mt-14 flex flex-wrap items-center justify-between gap-y-4 border-y border-border py-5">
          {cargo.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3">
              <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-foreground">
                {step}
              </span>

              {index < cargo.steps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="hidden h-4 w-4 text-muted-foreground sm:block"
                />
              )}
            </li>
          ))}
        </ol>

        {/* Cargo cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cargo.items.map((item, index) => {
            const Icon = cargoIcons[index]
            const image = cargoTypes[index]

            if (!Icon || !image) return null

            return (
              <article
                key={item.title}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-sm rounded-br-[3rem] border border-border bg-muted transition-colors duration-300 hover:bg-muted/70"
              >
                {/* Image */}
                <div className="relative aspect-[1.45] overflow-hidden">
                  <Image
                    src={image.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

                  {/* Icon */}
                  <div className="absolute bottom-[-2px] left-5 flex size-12 items-center justify-center rounded-full bg-background">
                    <Icon
                      className="size-6 text-primary"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col gap-3 p-6">
                  <h3 className="pr-10 font-heading text-lg font-bold uppercase leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 flex size-9 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:bg-muted">
                    <ArrowRight
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Fleet link */}
        <div className="mt-10">
          <ArrowLink
            href="fleet"
            label={cargo.fleet}
          />
        </div>
      </div>
    </section>
  )
}
