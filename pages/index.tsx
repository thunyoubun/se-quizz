import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiBookMarkLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" h-screen w-screen relative overflow-hidden  bg-gradient-to-b from-blue-600 to-blue-500">
      <div className="relative z-10">
        <div className=" m-auto flex justify-between items-center py-4  px-10">
          <ul className="hidden text-white  text-lg md:flex ">
            <li className="p-1">
              <Link href="/">
                <h1 className="font-bold text-white text-4xl pr-10">
                  Deviloper.
                </h1>
              </Link>
            </li>
            <li className="p-4  hover:text-gray-900">
              <Link href="/pages/myquizz">Product</Link>
            </li>
            <li className="p-4  hover:text-gray-900">
              <Link href="/pages/document">Document</Link>
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
                  <h1 className="font-bold text-white text-4xl pr-10">
                    Deviloper.
                  </h1>
                </Link>
              </li>
            </ul>
            <ul className=" flex justify-center">
              <li
                onClick={handleNav}
                className="text-white right-0 z-10 flex items-center"
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
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-400 text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue-400 text-center ease-in duration-300"
            }
          >
            <ul className=" text-white">
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/pages/myquizz">Product</Link>
              </li>
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

          <ul className="hidden text-white md:flex">
            <li className="p-4">
              <Link href="/login">
                <button className="  hover:text-black  font-bold py-2 px-4 rounded-md inline-flex align-middle items-center">
                  Login
                </button>
              </Link>
            </li>
            <li className="p-4">
              <Link href="/signin">
                <button className="border-whites border-2 bg-indigo-600 hover:bg-white hover:text-indigo-600  font-bold py-1 px-4 rounded-md inline-flex items-center">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-10 w-full h-fit flex z-10">
          {/* Left */}
          <div className=" w-full md:w-3/6 h-full flex-row justify-start pt-20 ">
            <div className="text-white w-fit flex bg-black/60 rounded-3xl p-1 h-8">
              <h1 className="inline-flex px-4 items-center shadow-lg bg-indigo-500 font-medium rounded-3xl">
                Quizz
              </h1>
              <h1 className="inline-flex px-4 items-center">Make your Quizz</h1>
            </div>
            <div className="mt-4">
              <h1 className=" text-white text-6xl font-bold">Importer Quizz</h1>
              <p className="  text-slate-300 mt-2 text-lg font-medium ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, ea veritatis amet sunt deleniti fugit ipsa expedita
                perferendis nisi temporibus dignissimos facere aut magnam
                numquam voluptatem accusantium, excepturi, saepe porro.
              </p>
            </div>
            <div className="mt-10 gap-5 flex">
              <Link
                href="/pages/myquizz"
                className=" bg-violet-500 hover:bg-violet-600 hover:scale-105 text-xl py-6 font-normal shadow-lg rounded-xl text-white inline-flex items-center md:px-10 px-5"
              >
                Get Started
                <BsArrowRight className="ml-3 " size={30} />
              </Link>
              <Link
                href="/documents"
                className=" bg-white text-xl py-6 hover:scale-105  shadow-lg rounded-xl text-indigo-500 font-semibold inline-flex items-center md:px-8 px-5"
              >
                <RiBookMarkLine className=" mr-2" />
                Read Document
              </Link>
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
            <div className="h-[200%] w-[20%] mr-4  right-0 bg-white rotate-45 shadow-lg  absolute text-white">
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
