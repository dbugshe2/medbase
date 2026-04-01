import { MenuIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { NAV_LINKS } from "@/data/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export function MobileNav() {
    return (
        <div className="block md:hidden">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost">
                        <MenuIcon /> Menu
                    </Button>
                </PopoverTrigger>

                <PopoverContent side="bottom" className="w-60 mr-6">
                    <ul className="flex flex-col items-start gap-4">
                        {
                            NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link className="text-foreground/50 hover:text-foreground font-medium" href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                        <div className="flex flex-col gap-4">
                            <Button variant={'outline'}>
                                Book a meeting 
                            </Button>

                            <ModeToggle />
                        </div>
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    )
}