import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { contacts } from '@/lib/content'
import { SectionHeading } from './section-heading'

const channels = [
  {
    icon: Phone,
    title: 'Позвонить',
    text: 'Диспетчерская работает круглосуточно, 24/7.',
    value: contacts.phone,
    href: contacts.phoneHref,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    text: 'Отправьте маршрут, тип и вес груза.',
    value: 'Написать в WhatsApp',
    href: contacts.whatsappHref,
  },
  {
    icon: Mail,
    title: 'Email',
    text: 'Для запросов от компаний и тендерных заявок.',
    value: contacts.email,
    href: `mailto:${contacts.email}`,
  },
]

export function OrderCta() {
  return (
    <section id="order" className="scroll-mt-20 bg-background py-20 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading
          index="06"
          eyebrow="Готовы начать?"
          title="Получите расчёт"
          titleMuted="стоимости бесплатно."
          lead="Оставьте заявку — мы свяжемся в течение 10 минут и рассчитаем стоимость доставки точно под ваш проект."
        />
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#order"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-navy"
          >
            Оформить заявку
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={contacts.whatsappHref}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
          >
            Написать в WhatsApp
          </a>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <li key={c.title}>
              <a
                href={c.href}
                className="group flex h-full flex-col gap-6 rounded-sm rounded-br-[2.5rem] bg-navy p-7 text-navy-foreground transition-colors hover:bg-primary"
              >
                <div className="flex items-center justify-between">
                  <c.icon className="size-6 text-slate-accent" aria-hidden="true" />
                  <ArrowUpRight
                    className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold uppercase">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-foreground/70">{c.text}</p>
                </div>
                <p className="mt-auto border-t border-navy-foreground/15 pt-4 font-heading text-sm font-bold">
                  {c.value}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
