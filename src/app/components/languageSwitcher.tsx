'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { locales, type Locale } from '@/i18n/config';

const STORAGE_KEY = 'locale';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && locales.includes(stored) && stored !== i18n.language) {
      i18n.changeLanguage(stored);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- same hydration-mismatch workaround as ThemeSwitch
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) {
    return null;
  }

  const toggle = () => {
    const next =
      locales[(locales.indexOf(i18n.language as Locale) + 1) % locales.length];
    i18n.changeLanguage(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="mx-5 inline-flex items-center rounded-full border border-[#224f95]/20 p-0.5 text-xs dark:border-blue-300/20"
    >
      {locales.map((locale) => (
        <span
          key={locale}
          className={`rounded-full px-2.5 py-1 transition-colors duration-200 ${
            i18n.language === locale
              ? 'bg-[#224f95] text-white dark:bg-blue-300 dark:text-zinc-900'
              : 'text-neutral-500'
          }`}
        >
          {locale.toUpperCase()}
        </span>
      ))}
    </button>
  );
};

export default LanguageSwitcher;
