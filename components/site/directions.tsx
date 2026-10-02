import { heroStats } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function Directions() {
  return (
    <section id="directions" className="scroll-mt-20 bg-background py-20 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-5 md:gap-32 md:px-10">
        <div className="flex flex-col gap-14">
          <SectionHeading
            index="01"
            eyebrow="В цифрах"
            title="Масштаб, который"
            titleMuted="работает на вас."
            lead="Собственный транспорт, тралы для негабарита и круглосуточная диспетчерская — по Алматы и всему региону."
          />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3 border-t border-slate-accent/50 pt-8">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-4xl font-extrabold tracking-tight text-primary md:text-6xl">
                  {stat.value}
                </dd>
                <dd className="max-w-48 text-sm leading-relaxed text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
