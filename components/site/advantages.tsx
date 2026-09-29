import { Clock, FileText, ShieldCheck, Wrench } from 'lucide-react'
import { advantages, contacts } from '@/lib/content'
import { ArrowLink, SectionHeading } from './section-heading'

const icons = [Clock, ShieldCheck, FileText, Wrench]

export function Advantages() {
  return (
    <section className="bg-navy py-20 text-navy-foreground md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          tone="dark"
          index="03"
          eyebrow="Почему выбирают нас"
          title="Доверьте работу"
          titleMuted="профессионалам."
          lead="Подача транспорта, сохранность груза, документы и техническая готовность парка — на каждом рейсе."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => {
            const Icon = icons[i]
            return (
              <li
                key={item.title}
                className="flex min-h-64 flex-col justify-between gap-10 rounded-sm rounded-br-[3rem] border border-navy-foreground/10 bg-primary/50 p-7 transition-colors hover:bg-primary"
              >
                <div className="flex items-start justify-between">
                  <Icon className="size-6 text-slate-accent" aria-hidden="true" />
                  <span className="font-heading text-xs font-semibold text-navy-foreground/60">{`0${i + 1}`}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-lg font-bold uppercase">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-foreground/75">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <ArrowLink tone="dark" href="#order" label="Оформить заявку" />
          <ArrowLink tone="dark" href={contacts.phoneHref} label="Позвонить нам" />
          <ArrowLink tone="dark" href={contacts.whatsappHref} label="Написать в WhatsApp" />
        </div>
      </div>
    </section>
  )
}
