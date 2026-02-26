import { createFileRoute } from "@tanstack/react-router";
import { Curriculum } from "@/components/curriculum";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import { buildPersonJsonLd, buildWebSiteJsonLd } from "@/core/seo/site-metadata";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([buildPersonJsonLd(), buildWebSiteJsonLd()])
      }
    ]
  }),
  component: App
});

function App() {
  return (
    <div className="relative z-10 flex flex-col gap-4 lg:gap-6">
      <Header />

      <main>
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6">
          <div className="order-1 col-span-1 lg:order-0 lg:col-span-4 xl:col-span-3">
            <Sidebar />
          </div>

          <div className="order-2 col-span-1 flex flex-col gap-8 lg:order-0 lg:col-span-8 xl:col-span-9">
            <Separator className="lg:hidden" />

            <Curriculum />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
