import { MapPin } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function SidebarMe() {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      <div className="mb-4 h-36 w-36 overflow-hidden rounded-full border-3 border-primary">
        <img alt="Kaique Lima Foto" height={200} src="/assets/kaique-lima-foto.jfif" width={200} />
      </div>

      <h2 className="font-bold text-2xl leading-tight">
        Kaique Lima<span className="text-primary">.</span>
      </h2>

      <h3 className="text-primary leading-tight">Senior Frontend Engineer</h3>

      <p className="mt-4 inline-flex items-center gap-2 text-muted-foreground text-sm leading-tight">
        <HugeiconsIcon icon={MapPin} size={16} /> Londrina, Brasil.
      </p>
    </div>
  );
}
