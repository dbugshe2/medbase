import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { NAV_LINKS } from "@/data/constants"


export function DesktopNav() {
    return (
        <div className="hidden md:flex justify-between items-center gap-4">
            <ul className="flex flex-grow-[1] justify-center items-center gap-4">
                {
                    NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <Link className="text-foreground/50 hover:text-foreground font-medium" href={link.href}>
                            {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div className="flex gap-4 items-center">
                <Button variant={'outline'}>
                    Book a meeting 
                </Button>

                <ModeToggle />
            </div>
        </div>
    )
}