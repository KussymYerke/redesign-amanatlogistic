import Image from 'next/image'
import { cargoTypes } from '@/lib/content'
import { ArrowLink, SectionHeading } from './section-heading'

const steps = ['Заявка', 'Расчёт', 'Подача ТС', 'Погрузка', 'Взвешивание', 'Документы', 'Маршрут', 'Доставка']

export function Cargo() {
  return (
    <section id="cargo" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          tone="dark"
          index="05"
          eyebrow="Что мы перевозим"
          title="Грузоперевозки"
          titleMuted="по Казахстану и СНГ."
          lead="Строительные, промышленные, коммерческие и негабаритные грузы. Специальные разрешения для тяжеловесных перевозок на тралах до 200 тонн."
          link={{ label: 'Рассчитать перевозку', href: '#order' }}
        />

        <ol className="flex flex-wrap items-center gap-x-3 gap-y-3 border-y border-primary-foreground/20 py-6">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold uppercase tracking-wider">{step}</span>
              {i < steps.length - 1 ? (
                <span aria-hidden="true" className="h-px w-6 bg-primary-foreground/40 md:w-10" />
              ) : null}
            </li>
          ))}
        </ol>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm rounded-br-[3rem] lg:col-span-2 lg:aspect-auto">
            <Image
              src="/images/truck-tent.jpeg"
              alt="Коммерческий груз"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="grid gap-10 sm:grid-cols-2 lg:col-span-3">
            {cargoTypes.map((item) => (
              <li key={item.title} className="flex flex-col gap-3 border-t border-primary-foreground/25 pt-6">
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-primary-foreground/75">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ArrowLink tone="dark" href="#fleet" label="Смотреть автопарк" />
        </div>
      </div>
    </section>
  )
}
