'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { truckSpecs, fleet } from '@/lib/content'
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
  const [activeTruck, setActiveTruck] = useState(fleet[0]?.name ?? '')
  const selectedTruck = fleet.find((truck) => truck.name === activeTruck) ?? fleet[0]
  const selectedImage = truckImages[selectedTruck.name] ?? '/images/hero-truck.png'

  return (
    <section id="fleet" className="scroll-mt-20 bg-background py-20 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          index="06"
          eyebrow="Наш транспорт"
          title="Автопарк."
          titleMuted="Весь в собственности."
          lead="Самосвалы грузоподъёмностью 25 и 40 тонн, тенты, рефрижератор и тралы. Весь транспорт проходит регулярное ТО и укомплектован опытными водителями."
        />

        <div className="grid overflow-hidden rounded-sm rounded-br-[3rem] border border-border lg:grid-cols-5">
          <div className="border-b border-border lg:col-span-2 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                {`Весь автопарк · ${fleet.length}`}
              </p>
              <p className="text-xs text-muted-foreground">Грузоподъёмность</p>
            </div>
            <ul className="max-h-[34rem] overflow-y-auto">
              {fleet.map((truck) => (
                <li key={truck.name} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActiveTruck(truck.name)}
                    className={cn('flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-muted', activeTruck === truck.name && 'bg-muted')}
                    aria-pressed={activeTruck === truck.name}
                  >
                  <div className="flex items-start gap-3">
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-slate-accent" aria-hidden="true" />
                    <div>
                      <p className="font-heading text-sm font-bold uppercase">{truck.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {truck.type}
                        {truck.volume !== '—' ? ` · ${truck.volume}` : ''}
                      </p>
                    </div>
                  </div>
                  <p className="shrink-0 font-heading text-sm font-bold text-primary">{truck.capacity}</p>
                    </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col lg:col-span-3">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={selectedImage}
                alt={`${selectedTruck.name} из автопарка AMANAT Logistic`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 rounded-sm bg-navy px-3 py-2 text-navy-foreground">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-navy-foreground/70">
                  Флагман
                </p>
                <p className="font-heading text-sm font-bold uppercase">{`${selectedTruck.name} · ${selectedTruck.capacity}`}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <p className="leading-relaxed text-muted-foreground">{selectedTruck.name} — собственный транспорт AMANAT Logistic для надёжной перевозки грузов. Грузоподъёмность {selectedTruck.capacity}{selectedTruck.volume !== '—' ? `, объём ${selectedTruck.volume}` : ''}. Машина проходит регулярное техническое обслуживание и готова к работе на городских и междугородних маршрутах.</p>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3">
                {(truckSpecs[selectedTruck.name] ?? truckSpecs.HOWO).map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1 border-t border-border pt-3">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{spec.label}</dt>
                    <dd className="font-heading text-sm font-bold">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
