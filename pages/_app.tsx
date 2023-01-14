import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Session } from "inspector";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/login" || router.pathname === "/" ? false : true;

  return (
    <SessionProvider session={pageProps.session}>
      {/* {showHeader && <Navbar />} */}
      {/* {showHeader && <Sidebar />} */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
