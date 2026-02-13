import { Separator } from "../ui/separator";
import { SidebarContact } from "./contact";
import { SidebarMe } from "./me";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <SidebarMe />

      <Separator />

      <desc className="text-balance text-muted-foreground text-sm">
        Desenvolvedor Frontend desde 2017, especilista em React e Next.js com mais de 7 anos construindo interfaces de
        alta performance para produtos digitais.
      </desc>

      <Separator />

      <SidebarContact />
    </div>
  );
}
