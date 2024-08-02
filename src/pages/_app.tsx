import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AuthModalProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import { TripProvider } from "@/contexts/TripContext";
import trips from '@/data/test-deal-data.json';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthModalProvider>
      <TripProvider trips={trips}>
        <Component {...pageProps} />
        <Toaster />
      </TripProvider>
    </AuthModalProvider>
  );
}
