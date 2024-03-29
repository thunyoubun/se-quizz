import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiBookMarkLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { useAuth } from "../contexts/auth";
import Head from "next/head";
import { getCookie } from "cookies-next";

export default function Home({ user }: any) {
  const [nav, setNav] = useState(false);
  /* const { data: session } = useSession(); */
  const { loading, isAuthenticated, login } = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" h-screen w-screen relative overflow-hidden  bg-gradient-to-b from-blue-600 to-blue-500">
      <Head>
        <title>EasyQ</title>
        <meta property="og:title" content="EasyQ" key="title" />
      </Head>
      <div className="relative z-10">
        <div className=" m-auto flex justify-between items-center py-4  px-10">
          <ul className="hidden text-white  text-lg md:flex ">
            <li className="p-1">
              <Link href="/">
                <h1 className="font-bold text-white text-4xl pr-10">EasyQ</h1>
              </Link>
            </li>
            {/* <li className="p-4  hover:text-gray-900">
              <Link href="/pages/myquizz">Product</Link>
            </li> */}
            <li className="p-4  hover:text-gray-900">
              <Link href="/pages/documents">Document</Link>
            </li>
            <li className="p-4  hover:text-gray-900">
              <Link href="https://deviloper-se.vercel.app/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className=" flex justify-between w-full md:hidden">
            <ul className="flex text-white justify-center text-lg ">
              <li className="p-1">
                <Link href="/">
                  <h1 className="font-bold text-white text-4xl pr-10">EasyQ</h1>
                </Link>
              </li>
            </ul>
            <ul className=" flex justify-center">
              <li className="p-4 text-white">
                {isAuthenticated ? (
                  <Link href={"pages/user"} className="flex gap-2">
                    <FaUser size={25} />
                    <span className="flex sm:inline">{user?.firstName}</span>
                  </Link>
                ) : (
                  <Link href={`${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`}>
                    <FaUser size={25} />
                  </Link>
                )}{" "}
              </li>
              <li
                onClick={handleNav}
                className="text-white right-0 z-20 cursor-pointer flex items-center"
              >
                {nav ? (
                  <AiOutlineClose size={40} />
                ) : (
                  <AiOutlineMenu size={40} />
                )}
              </li>
            </ul>
          </div>

          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 z-10 bottom-0 flex justify-center items-center w-full h-screen bg-blue-400 text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] z-10 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-400 text-center ease-in duration-300"
            }
          >
            <ul className=" text-white">
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/">Home</Link>
              </li>
              {/* <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/pages/myquizz">Product</Link>
              </li> */}
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/document">Document</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="https://deviloper-se.vercel.app/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {isAuthenticated || user ? (
            <ul className="hidden text-white md:flex">
              <li className="flex  items-center">
                <Link
                  href="/pages/user"
                  className=" flex gap-2 px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
                >
                  <FaUser size={20} />
                  <span className="hidden sm:inline">{user?.firstName}</span>
                  {/* <Image
                    src={`${session.user?.image}`}
                    alt="avatar"
                    width={20}
                    height={20}
                    className="hidden sm:inline"
                  ></Image> */}
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="hidden text-white md:flex">
              <li className="p-4">
                <Link href={`${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`}>
                  <button
                    /* onClick={() => signIn()} */
                    className=" border-whites  border-2  bg-indigo-600 hover:bg-white hover:text-indigo-600  font-bold py-2 px-4 rounded-md inline-flex align-middle items-center"
                  >
                    Sign in via CMU Account
                  </button>
                </Link>
              </li>
              {/* <li className="p-4">
                <Link href="/auth/register">
                  <button className="border-whites border-2 bg-indigo-600 hover:bg-white hover:text-indigo-600  font-bold py-1 px-4 rounded-md inline-flex items-center">
                    Sign Up
                  </button>
                </Link>
              </li> */}
            </ul>
          )}
        </div>
        <div className="px-10 w-full h-fit flex z-10">
          {/* Left */}
          <div className=" w-full md:w-3/6 h-full flex-row justify-start pt-20 ">
            <div className="text-white w-fit flex bg-black/60 rounded-3xl p-1 h-8">
              <h1 className="inline-flex px-4 items-center shadow-lg bg-indigo-500 font-medium rounded-3xl">
                Quiz
              </h1>
              <h1 className="inline-flex px-4 items-center">Make your Quiz</h1>
            </div>
            <div className="mt-4">
              <h1 className=" text-white text-6xl font-bold">
                LMS Quiz Importer
              </h1>

              <p className="  text-slate-300 mt-2 text-lg font-medium ">
                Welcome to `EasyQ`, quiz importer for 261111 Internet and Online
                Community course from Chiang Mai University. Our solution
                enables the course instructor to upload their quizzes as .doc or
                .docx file and automatically import them into the LMS. The
                instructor is no longer required to manually construct quizzes
                on the LMS platform. As a result, time and workforce are saved,
                since `EasyQ` handles all the works for you. Enjoy creating your
                new quizzes with us!!
              </p>
            </div>
            <div className="">
              <ul className="mt-10 gap-5 flex">
                <li>
                  <Link
                    href="/pages/dashboard"
                    className=" bg-violet-500 hover:bg-violet-600 hover:scale-105 text-xl py-6 font-normal shadow-lg rounded-xl text-white inline-flex items-center md:px-10 px-5"
                  >
                    Get Started
                    <BsArrowRight
                      className="ml-3 animate-bounceX   "
                      size={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="pages/documents"
                    className=" bg-white text-xl py-6 hover:scale-105  shadow-lg rounded-xl text-indigo-500 font-semibold inline-flex items-center md:px-8 px-5"
                  >
                    <RiBookMarkLine className=" mr-2" />
                    Read Document
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Right */}
          <div className="hidden  h-[615px] overflow-hidden w-3/6 p-auto md:flex xl:flex items-center justify-center justify-items-center align-middle ">
            <div className="z-10 ">
              <Image
                alt=""
                className="bg-cover z-10 "
                src={"/assets/high.png"}
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="h-[200%] w-[20%] mr-4 -z-10  right-0 bg-white rotate-45 shadow-lg  absolute text-white">
              5
            </div>
          </div>
        </div>
      </div>

      <ul className="circles   ">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }: any) => {
  const token = getCookie("cmu-oauth-example-token", { req, res });

  if (token) {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/user`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    const user = data.user;

    return {
      props: {
        token: token,
        user: user,
      },
    };
  } else {
    return {
      props: {
        user: null,
      },
    };
  }
};
