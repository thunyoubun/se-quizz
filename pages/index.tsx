import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className=" h-screen w-screen   bg-gradient-to-b from-blue-600 to-blue-500">
      <div className="m-auto flex justify-between items-center py-4 px-10">
        <ul className="hidden text-white text-lg sm:flex">
          <li className="p-1">
            <Link href="/">
              <h1 className="font-bold text-white text-4xl pr-10">Deviloper</h1>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/">Product</Link>
          </li>
          <li className="p-4">
            <Link href="/about">Document</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="hidden text-white sm:flex">
          <li className="p-4">
            <Link href="/login">
              <button className=" hover:text-indigo-600  font-bold py-2 px-4 rounded-md inline-flex align-middle items-center">
                Login
              </button>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/about">
              <button className="border-whites border-2 bg-indigo-600 hover:bg-white hover:text-indigo-600  font-bold py-1 px-4 rounded-md inline-flex items-center">
                Sign In
              </button>
            </Link>
          </li>
        </ul>
      </div>
      {/* Left */}
      <div className="px-10  w-full flex ">
        <div className=" w-3/6 flex-row justify-start pt-20">
          <div className="text-white w-fit flex bg-black/60 rounded-3xl p-1 h-8">
            <h1 className="inline-flex px-4 items-center bg-indigo-500 font-medium rounded-3xl">
              Quizz
            </h1>
            <h1 className="inline-flex px-4 items-center">Make your Quizz</h1>
          </div>
          <div className="mt-4">
            <h1 className=" text-white text-6xl font-bold">Importer Quizz</h1>
            <p className="  text-slate-300 mt-2 text-lg font-medium ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ea veritatis amet sunt deleniti fugit ipsa expedita
              perferendis nisi temporibus dignissimos facere aut magnam numquam
              voluptatem accusantium, excepturi, saepe porro.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="p-auto flex justify-center align-middle ">
          <div className="w-full flex justify-center items-center bg-cover m-auto p-r">
            <Image
              alt=""
              className="bg-cover"
              src={"/assets/high.png"}
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
