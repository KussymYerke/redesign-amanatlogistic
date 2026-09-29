'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { contacts, navLinks } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        solid
          ? 'border-border bg-background/95 text-foreground backdrop-blur'
          : 'border-border/70 bg-background/90 text-foreground backdrop-blur',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:px-10">
        <Logo />

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium opacity-90 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={contacts.phoneHref} className="flex items-center gap-2 text-sm font-semibold">
            <Phone className="size-4" aria-hidden="true" />
            {contacts.phone}
          </a>
          <a
            href="/order"
            className={cn(
              'rounded-full px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider transition-colors',
              solid
                ? 'bg-primary text-primary-foreground hover:bg-navy'
                : 'bg-navy-foreground text-navy hover:bg-navy-foreground/90',
            )}
          >
            Оформить заказ
          </a>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Мобильная навигация" className="mx-auto max-w-7xl px-5 py-6">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-heading text-lg font-bold uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a href={contacts.phoneHref} className="flex items-center gap-2 font-semibold">
                <Phone className="size-4" aria-hidden="true" />
                {contacts.phone}
              </a>
              <a
                href="/order"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-6 py-3.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-primary-foreground"
              >
                Оформить заказ
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
