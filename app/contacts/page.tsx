import Image from "next/image";
import { ContactForm } from "@/components/site/contact-form";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SectionHeading } from "@/components/site/section-heading";

export default function ContactsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="relative overflow-hidden">
          {/* Truck image: right side on desktop, full background behind content */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] lg:block">
            <Image
              src="/images/contact-fleet.jpg"
              alt="Грузовик Amanat Logistic на трассе"
              fill
              priority
              sizes="60vw"
              className="object-cover object-right"
            />
            {/* fade into page background on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            <div className="max-w-2xl">
              <h1 className="max-w-xl font-heading text-3xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-5xl">Обсудим вашу перевозку.</h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/80 md:text-lg">Оставьте заявку, и мы подберём оптимальный транспорт под ваш груз, рассчитаем стоимость и свяжемся с вами в ближайшее время.</p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            {/* Mobile: image below the form */}
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/images/truck.jpg"
                alt="Грузовик Amanat Logistic на трассе"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}