import { createFileRoute } from "@tanstack/react-router";

import { Curriculum } from "@/components/curriculum";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const Route = createFileRoute("/")({
  component: App
});

function App() {
  return (
    <div className="relative z-10 flex flex-col gap-6 py-4 lg:gap-10 lg:py-6">
      <Header />

      <main>
        <div className="container mx-auto grid max-w-7xl grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <Curriculum />
          </div>
        </div>
      </main>

      <footer />
    </div>
  );
}
