export function SidebarMe() {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      <div className="h-30 w-30 overflow-hidden rounded-full border-3 border-primary">
        <img alt="Kaique Lima Foto" height={200} src="/assets/kaique-lima-foto.jfif" width={200} />
      </div>

      <h2 className="font-bold text-2xl leading-tight">
        Kaique Lima<span className="text-primary">.</span>
      </h2>

      <h3 className="text-primary leading-tight">Senior Frontend Engineer</h3>
    </div>
  );
}
