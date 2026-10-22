'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider defaultTheme="dark" attribute="class">
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}
