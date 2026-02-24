import { SidebarAbout } from "@/components/sidebar/about";
import { Separator } from "../ui/separator";
import { SidebarContact } from "./contact";
import { SidebarList } from "./list";
import { SidebarMe } from "./me";

export function Sidebar() {
  return (
    <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col gap-4 lg:sticky lg:top-6 lg:gap-6">
      <SidebarMe />

      <Separator className="hidden lg:block" />

      <SidebarAbout />

      <Separator />

      <SidebarList />

      <Separator className="hidden lg:block" />

      <SidebarContact />
    </div>
  );
}
