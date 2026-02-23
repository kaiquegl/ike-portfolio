export function SidebarMe() {
  return (
    <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:gap-2 lg:text-left">
      <div className="h-24 w-24 overflow-hidden rounded-full border-3 border-primary sm:h-28 sm:w-28 lg:h-30 lg:w-30">
        <img alt="Kaique Lima Foto" height={200} src="/assets/kaique-lima-foto.jfif" width={200} />
      </div>

      <h2 className="font-bold text-2xl leading-tight">
        Kaique Lima<span className="text-primary">.</span>
      </h2>

      <h3 className="text-primary leading-tight">Senior Frontend Engineer</h3>
    </div>
  );
}
