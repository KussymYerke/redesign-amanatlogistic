'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { whatsappUrl } from '@/lib/content'

const cargoTypeOptions = [
  'Строительные материалы',
  'Промышленное оборудование',
  'Негабаритный груз',
  'Спецтехники',
  'Коммерческие товары',
  'Металлоконструкции',
  'Другое',
]

export function ContactForm() {
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const url = whatsappUrl({ name: String(data.get('name') || ''), phone: String(data.get('phone') || ''), route: String(data.get('route') || ''), cargo: String(data.get('cargo') || ''), weight: String(data.get('weight') || ''), message: String(data.get('message') || '') })
    setSent(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return <form onSubmit={submit} className="grid gap-5 rounded-sm rounded-br-[2.5rem] bg-navy p-6 text-navy-foreground md:grid-cols-2 md:p-9">
    <label className="grid gap-2 text-sm">Ваше имя<input required name="name" className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-slate-accent" placeholder="Имя" /></label>
    <label className="grid gap-2 text-sm">Телефон<input required name="phone" type="tel" className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-slate-accent" placeholder="+7" /></label>
    <label className="grid gap-2 text-sm">Маршрут<input required name="route" className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-slate-accent" placeholder="Алматы — Астана" /></label>
    <label className="grid gap-2 text-sm">Тип груза<select required name="cargo" defaultValue="" className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 text-navy-foreground outline-none focus:border-slate-accent"><option value="" disabled>Выберите тип груза</option>{cargoTypeOptions.map((option) => <option key={option} value={option} className="text-foreground">{option}</option>)}</select></label>
    <label className="grid gap-2 text-sm">Вес груза<input name="weight" className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-slate-accent" placeholder="Например, 20 тонн" /></label>
    <label className="grid gap-2 text-sm md:col-span-2">Комментарий<textarea name="message" rows={4} className="rounded-sm border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-slate-accent" placeholder="Дополнительные детали" /></label>
    <button className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-accent px-6 py-4 font-heading text-xs font-bold uppercase tracking-wider text-navy transition-colors hover:bg-white md:col-span-2" type="submit">{sent ? 'Заявка подготовлена' : 'Отправить в WhatsApp'}<ArrowUpRight className="size-4" /></button>
  </form>
}
