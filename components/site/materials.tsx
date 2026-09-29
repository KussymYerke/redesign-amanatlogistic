import Image from 'next/image'
import { materials } from '@/lib/content'
import { ArrowLink, SectionHeading } from './section-heading'

export function Materials() {
  return (
    <section id="materials" className="scroll-mt-20 bg-background py-20 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          index="04"
          eyebrow="Что мы доставляем"
          title="Инертные материалы"
          titleMuted="и строительные грузы."
          lead="Профессиональная доставка инертных материалов и вывоз строительного мусора в Алматы и регионе."
          link={{ label: 'Все услуги', href: '#order' }}
        />
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-sm rounded-br-[4rem]">
          <Image
            src="/images/materials.png"
            alt="Самосвал выгружает щебень на строительной площадке"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="grid gap-12 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {materials.map((item) => (
            <li key={item.title} className="flex flex-col gap-4 border-t border-border pt-8">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-accent">{item.tag}</p>
              <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
              <div className="mt-auto pt-2">
                <ArrowLink href="#order" label="Заказать" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
