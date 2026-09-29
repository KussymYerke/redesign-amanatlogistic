import { directions, heroStats } from '@/lib/content'
import { ArrowLink, SectionHeading } from './section-heading'

export function Directions() {
  return (
    <section id="directions" className="scroll-mt-20 bg-background py-20 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-5 md:gap-32 md:px-10">
        <div className="flex flex-col gap-14">
          <SectionHeading
            index="01"
            eyebrow="Что мы делаем"
            title="Два направления."
            titleMuted="Один автопарк."
            lead="Грузоперевозки собственным автопарком грузоподъёмностью 1–200 тонн — от погрузки до сдачи груза с документами."
          />
          <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
            {directions.map((item, i) => (
              <li key={item.title} className="flex flex-col gap-4 border-t border-border pt-8">
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                  {`0${i + 1}`} <span className="text-slate-accent">/</span> {item.tag}
                </p>
                <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.text}</p>
                <div className="mt-2">
                  <ArrowLink href={item.link.href} label={item.link.label} />
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-14">
          <SectionHeading
            index="02"
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
