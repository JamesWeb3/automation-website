import type { AppProps } from "next/app";
import "../styles/globals.css";
import { AuthModalProvider } from "@/contexts/AuthContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthModalProvider>
      <Component {...pageProps} />
    </AuthModalProvider>
  );
}
