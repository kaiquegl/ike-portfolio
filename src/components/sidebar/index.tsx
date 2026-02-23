import { SidebarAbout } from "@/components/sidebar/about";
import { Separator } from "../ui/separator";
import { SidebarContact } from "./contact";
import { SidebarList } from "./list";
import { SidebarMe } from "./me";

export function Sidebar() {
  return (
    <div className="sticky top-6 flex flex-col gap-4 lg:gap-6">
      <SidebarMe />

      <Separator />

      <SidebarAbout />

      <Separator />

      <SidebarList />

      <Separator />

      <SidebarContact />
    </div>
  );
}
