import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../contexts/auth";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Session } from "inspector";
import { ThemeProvider } from "../contexts/theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.25,user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}
