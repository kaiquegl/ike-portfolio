import { Email, GithubIcon, Linkedin02Icon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

export function SidebarContact() {
  return (
    <div>
      <ul className="flex flex-col gap-3 lg:gap-4">
        <li>
          <Button
            className="group h-auto w-full items-center justify-start gap-3 no-underline transition-colors"
            nativeButton={false}
            render={
              <a href="https://github.com/kaiquegl" rel="noopener" target="_blank" title="Github">
                <HugeiconsIcon className="size-5 lg:size-6" icon={GithubIcon} />

                <div className="flex flex-col justify-center gap-0.5 py-2 lg:gap-1">
                  <p className="text-foreground text-xs leading-tight lg:text-sm">Github</p>
                  <span className="text-[0.625rem] text-muted-foreground leading-tight lg:text-xs">@kaiquegl</span>
                </div>

                <HugeiconsIcon
                  className="absolute right-2 size-4 opacity-0 transition-all group-hover:opacity-100"
                  icon={LinkSquare02Icon}
                />
              </a>
            }
            variant="outline"
          />
        </li>
        <li>
          <Button
            className="group h-auto w-full items-center justify-start gap-3 no-underline transition-colors"
            nativeButton={false}
            render={
              <a href="https://www.linkedin.com/in/kaique-gl" rel="noopener" target="_blank" title="Linkedin">
                <HugeiconsIcon className="size-5 lg:size-6" icon={Linkedin02Icon} />

                <div className="flex flex-col justify-center gap-0.5 py-2 lg:gap-1">
                  <p className="text-foreground text-xs leading-tight lg:text-sm">LinkedIn</p>
                  <span className="text-[0.625rem] text-muted-foreground leading-tight lg:text-xs">/in/kaique-gl</span>
                </div>

                <HugeiconsIcon
                  className="absolute right-2 size-4 opacity-0 transition-all group-hover:opacity-100"
                  icon={LinkSquare02Icon}
                />
              </a>
            }
            variant="outline"
          />
        </li>
        <li>
          <Button
            className="group h-auto w-full items-center justify-start gap-3 no-underline transition-colors"
            nativeButton={false}
            render={
              <a href="mailto:kaikegl@proton.me" rel="noopener" target="_blank" title="E-mail">
                <HugeiconsIcon className="size-5 lg:size-6" icon={Email} />

                <div className="flex flex-col justify-center gap-0.5 py-2 lg:gap-1">
                  <p className="text-foreground text-xs leading-tight lg:text-sm">E-mail</p>
                  <span className="text-[0.625rem] text-muted-foreground leading-tight lg:text-xs">
                    kaikegl@proton.me
                  </span>
                </div>

                <HugeiconsIcon
                  className="absolute right-2 size-4 opacity-0 transition-all group-hover:opacity-100"
                  icon={LinkSquare02Icon}
                />
              </a>
            }
            variant="outline"
          />
        </li>
      </ul>
    </div>
  );
}
