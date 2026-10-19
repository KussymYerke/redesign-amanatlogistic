'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { whatsappUrl } from '@/lib/content'
import { useLanguage } from '@/lib/i18n'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()
  const content = t.orderPage.form

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const url = whatsappUrl({
      name: String(data.get('name') || ''),
      phone: String(data.get('phone') || ''),
      route: String(data.get('route') || ''),
      cargo: String(data.get('cargo') || ''),
      weight: String(data.get('weight') || ''),
      message: String(data.get('message') || ''),
    })

    setSent(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const inputClassName =
    'rounded-sm border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-slate-accent'

  return (
    <form
      onSubmit={submit}
      className="grid gap-5 rounded-sm rounded-br-[2.5rem] bg-navy p-6 text-navy-foreground md:grid-cols-2 md:p-9"
    >
      <label className="grid gap-2 text-sm">
        {content.name}
        <input
          required
          name="name"
          autoComplete="name"
          className={inputClassName}
          placeholder={content.namePlaceholder}
        />
      </label>

      <label className="grid gap-2 text-sm">
        {content.phone}
        <input
          required
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClassName}
          placeholder={content.phonePlaceholder}
        />
      </label>

      <label className="grid gap-2 text-sm">
        {content.route}
        <input
          required
          name="route"
          className={inputClassName}
          placeholder={content.routePlaceholder}
        />
      </label>

      <label className="grid gap-2 text-sm">
        {content.cargo}
        <select
          required
          name="cargo"
          defaultValue=""
          className={inputClassName}
        >
          <option value="" disabled>
            {content.cargoPlaceholder}
          </option>

          {content.cargoTypes.map((option) => (
            <option
              key={option}
              value={option}
              className="text-foreground"
            >
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm">
        {content.weight}
        <input
          name="weight"
          className={inputClassName}
          placeholder={content.weightPlaceholder}
        />
      </label>

      <label className="grid gap-2 text-sm md:col-span-2">
        {content.message}
        <textarea
          name="message"
          rows={4}
          className={inputClassName}
          placeholder={content.messagePlaceholder}
        />
      </label>

      <button
        className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-accent px-6 py-4 font-heading text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:bg-white md:col-span-2"
        type="submit"
      >
        {sent ? content.sent : content.submit}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </button>
    </form>
  )
}
