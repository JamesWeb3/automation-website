import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AuthModalProvider } from "@/contexts/AuthContext";
import { TripProvider } from '@/contexts/TripContext';
import { Toaster } from "@/components/ui/toaster"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthModalProvider>
      <TripProvider>
      <Component {...pageProps} />
      <Toaster />
      </TripProvider>
    </AuthModalProvider>
  );
}
