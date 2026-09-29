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
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button key={image.src} type="button" onClick={() => setActiveImage(index)} className="group relative aspect-[4/3] overflow-hidden rounded-sm text-left">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
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
