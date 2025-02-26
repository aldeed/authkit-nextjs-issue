import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";

export default function App({ Component, pageProps }: AppProps) {
  return <AuthKitProvider><Component {...pageProps} /></AuthKitProvider>;
}
