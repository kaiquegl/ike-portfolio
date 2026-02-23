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
        <div className="container mx-auto grid max-w-7xl grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <Curriculum />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
