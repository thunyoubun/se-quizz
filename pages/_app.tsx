import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../contexts/auth";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Session } from "inspector";
import { ThemeProvider } from "../contexts/theme";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    function handleComplete(url: string) {
      return (
        url === router.asPath &&
        setTimeout(() => {
          setLoading(false);
        }, 500)
      );
    }

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return !loading ? (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  ) : (
    <div className="w-full h-screen bg-white dark:bg-gray-600 flex justify-center items-center ">
      <Head>
        <title>EasyQ</title>
        <meta property="og:title" content="EasyQ - My Quizzes" key="title" />
      </Head>
      <div className="loadingio-spinner-spinner-dtn99hj0z25">
        <div className="ldio-6w467ibr0lr">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
