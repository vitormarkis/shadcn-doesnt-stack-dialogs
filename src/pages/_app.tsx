import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { OnlyClient } from "@/components/only-client/OnlyClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <OnlyClient>
        <Component {...pageProps} />
      </OnlyClient>
    </ThemeProvider>
  );
}
