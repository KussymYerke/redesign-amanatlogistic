"use client";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { contacts } from "@/lib/content";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { useLanguage } from "@/lib/i18n";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/amanat.logistic.kz?stkn=bDhtcTU4cGk2bmF2",
    label: "Instagram AMANAT Logistic",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@amanat_logistic?_r=1&_t=ZS-99sxxdAI1hf",
    label: "TikTok AMANAT Logistic",
  },
];

export default function ContactsPage() {
  const { t } = useLanguage();
  const content = t.contactsPage;

  const mapQuery = encodeURIComponent(contacts.address);

  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="relative overflow-hidden">
          {/* Desktop hero image */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] lg:block">
            <Image
              src="/images/30.jpeg"
              alt={content.truckAlt}
              fill
              priority
              sizes="60vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
            {/* Page heading */}
            <div className="max-w-3xl">
              <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.22em] text-slate-accent">
                {content.eyebrow}
              </p>

              <h1 className="max-w-2xl font-heading text-3xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-5xl">
                {content.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                {content.description}
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              {/* Contact information */}
              <div className="rounded-2xl border border-border/70 bg-background/95 p-6 shadow-sm backdrop-blur-sm md:p-8">
                <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground">
                  {content.information}
                </h2>

                <div className="mt-7 flex flex-col gap-6">
                  {/* Phone */}
                  <a
                    href={contacts.phoneHref}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                      <Phone className="size-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0 pt-0.5">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {content.call}
                      </span>
                      <span className="mt-1 block break-words font-semibold text-foreground transition-colors group-hover:text-slate-accent">
                        {contacts.phone}
                      </span>
                    </span>

                    <ArrowUpRight className="ml-auto mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contacts.email}`}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0 pt-0.5">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {content.email}
                      </span>
                      <span className="mt-1 block break-words font-semibold text-foreground transition-colors group-hover:text-slate-accent">
                        {contacts.email}
                      </span>
                    </span>

                    <ArrowUpRight className="ml-auto mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0 pt-0.5">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {content.address}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-foreground">
                        {contacts.address}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {content.social}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-slate-accent hover:bg-muted"
                      >
                        {social.name}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 md:px-6">
                  <MapPin
                    className="size-5 shrink-0 text-slate-accent"
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
                      {content.mapTitle}
                    </h2>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {content.mapSubtitle}
                    </p>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-foreground transition-colors hover:text-slate-accent"
                  >
                    {content.openMap}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>

                <div className="relative h-[320px] md:h-[420px]">
                  <iframe
                    title={content.mapTitle}
                    src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Mobile truck image */}
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/images/truck.jpg"
                alt={content.truckAlt}
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
