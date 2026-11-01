'use client'

import { useState } from 'react'
import Image from 'next/image'
import { truckSpecs, fleet } from '@/lib/content'
import { useLanguage } from '@/lib/i18n'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const truckImages: Record<string, string> = {
  HOWO: '/images/truck-howo.png',
  'Mercedes-Benz Arocs': '/images/truck-mercedes.png',
  'Shacman X3000': '/images/truck-shacman.png',
  Газель: '/images/truck-gazelle.jpeg',
  DAF: '/images/truck-daf.jpeg',
  'Mercedes-Benz': '/images/truck-mercedes-10t.jpeg',
  'Открытая площадка': '/images/truck-open-platform.jpeg',
  Тент: '/images/truck-tent.jpeg',
  Рефрижератор: '/images/truck-refrigerator.jpeg',
  Трал: '/images/truck-trawl.jpeg',
}

export function Fleet() {
  const { t } = useLanguage()
  const content = t.fleetSection
  const company = t.companyContent

  const [activeTruck, setActiveTruck] = useState(fleet[0]?.name ?? '')

  const selectedTruck =
    fleet.find((truck) => truck.name === activeTruck) ?? fleet[0]

  const selectedImage =
    truckImages[selectedTruck.name] ?? '/images/hero-truck.png'

  const translateTruckName = (name: string) =>
    content.types[name as keyof typeof content.types] ?? name

  const specKeys: Record<string, keyof typeof company.specs> = {
    'Грузоподъёмность': 'capacity',
    'Объём кузова': 'volume',
    'Мощность': 'power',
    'Формула': 'formula',
    'Тип транспорта': 'vehicleType',
    'Применение': 'application',
    'Тип кузова': 'bodyType',
    'Погрузка': 'loading',
    'Температурный режим': 'temperature',
  }

  const translateSpecLabel = (label: string) => {
    const key = specKeys[label]
    return key ? company.specs[key] : label
  }

  const truckDescription =
  company.truckDescriptions[
    selectedTruck.name as keyof typeof company.truckDescriptions
  ]

  return (
    <section
      id="fleet"
      className="scroll-mt-20 bg-navy py-20 text-navy-foreground md:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          tone="dark"
          index="04"
          eyebrow={content.eyebrow}
          title={content.title}
          titleMuted={content.titleMuted}
          lead={content.lead}
        />

        <div className="grid overflow-hidden rounded-sm rounded-br-[3rem] border border-navy-foreground/10 lg:grid-cols-5">
          <div className="border-b border-navy-foreground/10 lg:col-span-2 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-navy-foreground/10 px-6 py-4">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-navy-foreground">
                {`${content.allFleet} · ${fleet.length}`}
              </p>

              <p className="text-xs text-navy-foreground/50">
                {content.capacity}
              </p>
            </div>

            <ul className="max-h-[34rem] overflow-y-auto">
              {fleet.map((truck) => (
                <li
                  key={truck.name}
                  className="border-b border-navy-foreground/10 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setActiveTruck(truck.name)}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors',
                      'hover:bg-primary/50',
                      activeTruck === truck.name && 'bg-primary/50',
                    )}
                    aria-pressed={activeTruck === truck.name}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="relative size-12 shrink-0 overflow-hidden rounded-sm bg-primary">
                        <Image
                          src={
                            truckImages[truck.name] ??
                            '/images/hero-truck.png'
                          }
                          alt={translateTruckName(truck.name)}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-heading text-sm font-bold uppercase">
                          {translateTruckName(truck.name)}
                        </p>

                        <p className="text-sm text-navy-foreground/60">
                          {translateTruckName(truck.type)}
                          {truck.volume !== '—' ? ` · ${truck.volume}` : ''}
                        </p>
                      </div>
                    </div>

                    <p className="shrink-0 font-heading text-sm font-bold text-slate-accent">
                      {truck.capacity}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col lg:col-span-3">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={selectedImage}
                alt={`${translateTruckName(selectedTruck.name)} ${content.truckAlt}`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />

              <div className="absolute left-4 top-4 rounded-sm bg-primary px-3 py-2 text-navy-foreground">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-navy-foreground/60">
                  {content.flagship}
                </p>

                <p className="font-heading text-sm font-bold uppercase">
                  {`${translateTruckName(selectedTruck.name)} · ${selectedTruck.capacity}`}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 bg-primary/30 p-6 md:p-8">
              <p className="leading-relaxed text-navy-foreground/75">
                {truckDescription}
              </p>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
                {(truckSpecs[selectedTruck.name] ?? truckSpecs.HOWO).map(
                  (spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col gap-1 border-t border-navy-foreground/10 pt-3"
                    >
                      <dt className="text-xs uppercase tracking-wider text-navy-foreground/50">
                        {translateSpecLabel(spec.label)}
                      </dt>

                      <dd className="font-heading text-sm font-bold">
                        {spec.value}
                      </dd>
                    </div>
                  ),
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}