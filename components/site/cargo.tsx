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
import { ArrowLink, SectionHeading } from './section-heading'

const steps = [
  'Заявка',
  'Расчёт',
  'Подача ТС',
  'Погрузка',
  'Документы',
  'Маршрут',
  'Доставка',
  'Выгрузка',
]

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
  return (
    <section
      id="cargo"
      className="scroll-mt-20 overflow-hidden bg-navy py-20 text-navy-foreground md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          tone="dark"
          index="03"
          eyebrow="Что мы перевозим"
          title="Грузоперевозки"
          titleMuted="по Казахстану и СНГ."
          lead="Строительные, промышленные, коммерческие и негабаритные грузы. Специальные разрешения для тяжеловесных перевозок на тралах до 200 тонн."
          link={{
            label: 'Рассчитать перевозку',
            href: '#order',
          }}
        />

        {/* Steps */}
        <ol className="mt-14 flex flex-wrap items-center justify-between gap-y-4 border-y border-navy-foreground/20 py-5">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-navy-foreground">
                {step}
              </span>

              {i < steps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="hidden h-4 w-4 text-navy-foreground/40 sm:block"
                />
              )}
            </li>
          ))}
        </ol>

        {/* Cargo cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cargoTypes.map((item, index) => {
            const Icon = cargoIcons[index]

            return (
              <article
                key={item.title}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-sm rounded-br-[3rem] border border-navy-foreground/10 bg-primary/50 transition-colors duration-300 hover:bg-primary"
              >
                {/* Image */}
                <div className="relative aspect-[1.45] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />

                  {/* Icon */}
                  <div className="absolute bottom-[-2px] left-5 flex size-12 items-center justify-center rounded-full bg-primary">
                    <Icon
                      className="size-6 text-slate-accent"
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

                  <p className="text-sm leading-relaxed text-navy-foreground/75">
                    {item.text}
                  </p>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 flex size-9 items-center justify-center rounded-full border border-navy-foreground/15 bg-primary/80 transition-colors group-hover:bg-primary">
                    <ArrowRight
                      className="size-4 text-slate-accent"
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
            tone="dark"
            href="#fleet"
            label="Смотреть автопарк"
          />
        </div>
      </div>
    </section>
  )
}