import { Cargo } from "@/components/site/cargo";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
export default function CargoPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <Cargo />
      </main>
      <SiteFooter />
    </>
  );
}
