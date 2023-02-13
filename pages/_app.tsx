import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../contexts/auth";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Session } from "inspector";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
