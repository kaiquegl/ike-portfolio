import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Curriculum } from "@/components/curriculum";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export function PortfolioPage() {
  return (
    <div className="relative z-10 flex flex-col gap-4 lg:gap-6">
      <div className="sticky top-0 z-20 bg-background/10 backdrop-blur-sm">
        <div className="container mx-auto w-full max-w-5xl px-4 sm:px-6">
          <Header />
        </div>
      </div>

      <div className="container mx-auto w-full max-w-5xl px-4 sm:px-6">
        <main className="mt-2 flex flex-col gap-4 lg:gap-6">
          <Hero />
          <Contact />
          <About />
          <Curriculum />
        </main>
      </div>

      <Footer />
    </div>
  );
}
