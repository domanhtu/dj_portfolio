"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./themeSwitcher";

export default function Navbar() {
    const pathname = usePathname();

    const isActiveLink = (href: string) => {
        return pathname === href;
    };

    return (
        <nav className="flex h-20 font-mono text-base lg:text-xl dark:text-neutral-200 text-neutral-700 justify-end items-center">
            <Link href="/playlists" className={`mx-5 ${
                isActiveLink("/playlists") ? "underline font-medium" : ""
              }`}>
              Playlist
            </Link>
            <Link href="/" className={`mx-5 ${
                isActiveLink("/") ? "underline font-medium" : ""
              }`}>
              O mně
            </Link>
            <ThemeSwitcher/>
          </nav>
    )
}