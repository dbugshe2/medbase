import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SOCIAL_LINKS = [
    {
        id: 'twitter-social-link',
        href: 'https://twitter.com/veo',
        icon: XIcon
    },
    {
        id: 'linkedin-social-link',
        href: 'https://www.linkedin.com/company/veo',
        icon: LinkedinIcon
    },
    {
        id: 'github-social-link',
        href: 'https://github.com/veo',
        icon: GithubIcon
    }
]
const LINKS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Services',
        href: '/services',
    },
    {
        label: 'Pricing',
        href: '/pricing',
    }
]
export function Footer() {
    return (
        <footer className="py-12 px-8 border-t">
            <div className="flex w-full justify-between items-center gap-4 flex-wrap">
                <div className="inline-flex items-center gap-1">
                    <div className="size-6">
                        <Logo className="size-full" />
                    </div>
                    <span className="inline-block text-lg font-bold">Veo</span>
                </div>
                <ul className="flex items-center gap-2">
                    {
                        SOCIAL_LINKS.map((link) => (
                            <li key={link.id}>
                                <Button variant={'ghost'} size={'icon'}>
                                    <a href={link.href}>
                                        <link.icon />
                                    </a>
                                </Button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
            <div className="flex gap-4 justify-between flex-wrap">
                <ul className="flex py-4 justify-self-start mt-2 gap-4">
                    {
                        LINKS.map((link) => (
                            <li key={link.label}>
                                <Link className="text-foreground/50 hover:text-foreground font-medium" href={link.href}>
                                {link.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                 <ul className="flex py-4 justify-self-start mt-2 gap-4">
                    <li>
                        <Link className="text-foreground/30 hover:text-foreground font-medium text-sm" href={'/privacy'}>
                            Privacy
                        </Link>
                    </li>
                    <li>
                        <Link className="text-foreground/30 hover:text-foreground font-medium text-sm" href={'/terms'}>
                            Terms
                        </Link>
                    </li>
                </ul>
            </div>

            <small className="text-muted-foreground">
                &copy; {new Date().getFullYear()} Veo. created by <a href="https://x.com/lbnm_yussef" className="text-foreground font-medium">@youcefBnm</a>
            </small>
        </footer>
    )
}