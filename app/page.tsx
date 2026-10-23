import { Advantages } from '@/components/site/advantages'
import { Directions } from '@/components/site/directions'
import { Hero } from '@/components/site/hero'
import { OrderCta } from '@/components/site/order-cta'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { Standards } from '@/components/site/standards'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Directions />
        <Advantages />
        <Standards />
        <OrderCta />
      </main>
      <SiteFooter />
    </>
  )
}
