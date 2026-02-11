import { createFileRoute } from "@tanstack/react-router";
import { Curriculum } from "@/components/curriculum";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <main>
        <div className="container mx-auto grid max-w-7xl grid-cols-12">
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
