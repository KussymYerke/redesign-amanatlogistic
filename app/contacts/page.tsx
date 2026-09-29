import { ContactForm } from '@/components/site/contact-form'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { SectionHeading } from '@/components/site/section-heading'
import { contacts } from '@/lib/content'
export default function ContactsPage() { return <><SiteHeader /><main className="pt-20"><section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"><SectionHeading index="05" eyebrow="Контакты" title="Обсудим вашу" titleMuted="перевозку." lead="Заполните форму — мы подготовим сообщение в WhatsApp с деталями заявки." /><div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><address className="not-italic"><p className="font-heading text-2xl font-bold">{contacts.phone}</p><p className="mt-4 text-muted-foreground">{contacts.email}</p><p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">{contacts.address}</p></address><ContactForm /></div></section></main><SiteFooter /></> }
