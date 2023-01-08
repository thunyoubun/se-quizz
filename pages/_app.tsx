import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/login" || router.pathname === "/" ? false : true;

  return (
    <>
      {/* {showHeader && <Navbar />} */}
      {/* {showHeader && <Sidebar />} */}
      <Component {...pageProps} />
    </>
  );
}
