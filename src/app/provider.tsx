"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode;
  }

export default function Providers ({ children }: ProvidersProps) {
    return <ThemeProvider defaultTheme="dark" attribute="class">{children}</ThemeProvider>
}