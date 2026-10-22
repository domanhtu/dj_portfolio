'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './themeSwitcher';
import LanguageSwitcher from './languageSwitcher';

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="flex h-20 font-mono text-base lg:text-xl dark:text-neutral-200 text-neutral-700 justify-end items-center">
      <Link
        href="/playlists"
        className={`mx-5 ${
          isActiveLink('/playlists') ? 'underline font-medium' : ''
        }`}
      >
        {t('nav.playlist')}
      </Link>
      <Link
        href="/"
        className={`mx-5 ${isActiveLink('/') ? 'underline font-medium' : ''}`}
      >
        {t('nav.about')}
      </Link>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </nav>
  );
}
