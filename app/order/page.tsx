import { ContactForm } from '@/components/site/contact-form'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { SectionHeading } from '@/components/site/section-heading'
export default function OrderPage() { return <><SiteHeader /><main className="pt-20"><section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"><SectionHeading index="06" eyebrow="Оформить заказ" title="Получите расчёт" titleMuted="стоимости бесплатно." lead="Оставьте заявку — мы свяжемся в течение 30 минут." /><div className="mt-12"><ContactForm /></div></section></main><SiteFooter /></> }
