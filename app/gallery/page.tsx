'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { galleryImages } from '@/lib/content'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { SectionHeading } from '@/components/site/section-heading'

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  return (
    <>
      <SiteHeader />
      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <SectionHeading index="04" eyebrow="Галерея" title="Техника и" titleMuted="перевозки." lead="Фотографии нашего транспорта и выполненных перевозок. Нажмите на фото для просмотра." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <button key={image.src} type="button" onClick={() => setActiveImage(index)} className={index === 0 ? 'group relative min-h-[360px] overflow-hidden rounded-sm rounded-br-[3rem] text-left sm:row-span-2' : 'group relative min-h-[260px] overflow-hidden rounded-sm text-left'} aria-label={`Открыть фото: ${image.title}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5 pt-16 font-heading text-lg font-bold text-white">{image.title}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      {activeImage !== null ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5" role="dialog" aria-modal="true" aria-label="Просмотр фотографии" onClick={() => setActiveImage(null)}>
          <button type="button" onClick={() => setActiveImage(null)} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Закрыть"><X className="size-6" /></button>
          <Image src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} width={1600} height={1000} className="max-h-[85vh] w-auto max-w-full object-contain" onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </>
  )
}
