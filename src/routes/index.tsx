import { createFileRoute } from "@tanstack/react-router";
import { Curriculum } from "@/components/curriculum";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const Route = createFileRoute("/")({
  // validateSearch: createStandardSchemaV1(searchParams),
  // beforeLoad: ({ search }) => {
  //   if (!search.skills) {
  //     throw redirect({
  //       to: "/",
  //       replace: true,
  //       search: { skills: "react,nextjs,typescript" }
  //     });
  //   }
  // },
  component: App
});

function App() {
  return (
    <div className="relative z-10 flex flex-col gap-4 lg:gap-6">
      <Header />

      <main>
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-0">
          <div className="order-1 col-span-1 lg:order-0 lg:col-span-3">
            <Sidebar />
          </div>
          <div className="order-2 col-span-1 lg:order-0 lg:col-span-9">
            <Curriculum />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
