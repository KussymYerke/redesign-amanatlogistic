import { Mail, MapPin, Phone } from 'lucide-react'
import { contacts, navLinks, services } from '@/lib/content'
import { Logo } from './logo'

export function SiteFooter() {
  return (
    <footer id="contacts" className="scroll-mt-20 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-20 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            Грузоперевозки по Казахстану и СНГ собственным автопарком от 1 до 200 тонн.
          </p>
          <a
            href="/order"
            className="self-start rounded-full bg-navy-foreground px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:bg-navy-foreground/90"
          >
            Оформить заказ
          </a>
        </div>

        <nav aria-label="Навигация в подвале" className="flex flex-col gap-5">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-slate-accent">Навигация</h2>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-navy-foreground/80 hover:text-navy-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-slate-accent">Услуги</h2>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s}>
                <a href="/cargo" className="text-sm text-navy-foreground/80 hover:text-navy-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <address className="flex flex-col gap-5 not-italic">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-slate-accent">Контакты</h2>
          <a href={contacts.phoneHref} className="flex items-center gap-3 text-sm font-semibold">
            <Phone className="size-4 text-slate-accent" aria-hidden="true" />
            {contacts.phone}
          </a>
          <a href={`mailto:${contacts.email}`} className="flex items-center gap-3 text-sm text-navy-foreground/80">
            <Mail className="size-4 text-slate-accent" aria-hidden="true" />
            {contacts.email}
          </a>
          <p className="flex items-start gap-3 text-sm leading-relaxed text-navy-foreground/80">
            <MapPin className="mt-0.5 size-4 shrink-0 text-slate-accent" aria-hidden="true" />
            {contacts.address}
          </p>
        </address>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-navy-foreground/60 md:flex-row md:justify-between md:px-10">
          <p>{`© ${new Date().getFullYear()} Amanat Logistic. Все права защищены.`}</p>
          <p>Доставка по Алматы и региону</p>
        </div>
      </div>
    </footer>
  )
}
