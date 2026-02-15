import { Email, GithubIcon, Linkedin02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

export function SidebarContact() {
  return (
    <div>
      <ul className="inline-flex gap-3 lg:gap-4">
        <li>
          <Button
            render={
              <a href="https://github.com/kaiquegl" rel="noopener" target="_blank" title="Github">
                <HugeiconsIcon icon={GithubIcon} />
                <span className="sr-only">Github</span>
              </a>
            }
            size="icon-lg"
            variant="outline"
          />
        </li>
        <li>
          <Button
            render={
              <a href="https://www.linkedin.com/in/kaique-gl" rel="noopener" target="_blank" title="Linkedin">
                <HugeiconsIcon icon={Linkedin02Icon} />
                <span className="sr-only">Github</span>
              </a>
            }
            size="icon-lg"
            variant="outline"
          />
        </li>
        <li>
          <Button
            render={
              <a href="mailto:kaikegl@proton.me" rel="noopener" target="_blank" title="E-mail">
                <HugeiconsIcon icon={Email} />
                <span className="sr-only">E-mail</span>
              </a>
            }
            size="icon-lg"
            variant="outline"
          />
        </li>
      </ul>
    </div>
  );
}
