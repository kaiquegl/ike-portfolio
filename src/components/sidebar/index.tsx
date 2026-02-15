import { Separator } from "../ui/separator";
import { SidebarContact } from "./contact";
import { SidebarList } from "./list";
import { SidebarMe } from "./me";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <SidebarMe />

      <Separator />

      <SidebarList />

      <Separator />

      <SidebarContact />
    </div>
  );
}
