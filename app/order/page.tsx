import Image from "next/image";
import { Clock, Calculator, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SectionHeading } from "@/components/site/section-heading";

const benefits = [
  {
    icon: Clock,
    title: "Ответ за 30 минут",
    text: "Менеджер свяжется с вами в рабочее время и уточнит детали перевозки.",
  },
  {
    icon: Calculator,
    title: "Бесплатный расчёт",
    text: "Рассчитаем стоимость под ваш груз, маршрут и сроки без обязательств.",
  },
  {
    icon: ShieldCheck,
    title: "Надёжная доставка",
    text: "Подберём подходящий транспорт и сопроводим груз до пункта назначения.",
  },
];

export default function OrderPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <SectionHeading
            index="06"
            eyebrow="Оформить заказ"
            title="Получите расчёт"
            titleMuted="стоимости бесплатно."
            lead="Оставьте заявку — мы свяжемся в течение 30 минут."
          />

          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Image with floating badges */}
            <div className="relative order-1 min-h-[280px] overflow-hidden rounded-3xl lg:order-2 lg:min-h-full">
              <Image
                src="/images/order-fleet.jpg"
                alt="Грузовик Amanat Logistic на трассе"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute inset-x-5 bottom-5 flex flex-wrap gap-3">
                <div className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-foreground shadow-lg backdrop-blur">
                  Перевозки по Казахстану и СНГ
                </div>
                <div className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-foreground shadow-lg backdrop-blur">
                  Работаем 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}