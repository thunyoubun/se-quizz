import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../contexts/auth";

export default function Documents({ user }: any) {
  const [nav, setNav] = useState(false);
  const { loading, isAuthenticated, login } = useAuth();

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" h-full w-full relative overflow-hidden  bg-gradient-to-b from-blue-600 to-blue-500">
      <div className="  flex w-full justify-between overflow-hidden items-center py-4  px-10">
        <ul className="hidden overflow-hidden text-white  text-lg md:flex ">
          <li className="p-1">
            <Link href="/">
              <h1 className="font-bold text-white text-4xl pr-10">EasyQ</h1>
            </Link>
          </li>
          {/* <li className="p-4  hover:text-gray-900">
              <Link href="/pages/myquizz">Product</Link>
            </li> */}
          <li className="p-4  hover:text-gray-900">
            <Link href="/pages/document">Document</Link>
          </li>
          <li className="p-4  hover:text-gray-900">
            <Link href="https://deviloper-se.vercel.app/contact">Contact</Link>
          </li>
        </ul>
        <div className=" flex justify-between w-full md:hidden overflow-hidden">
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
              )}
            </li>
            <li
              onClick={handleNav}
              className="text-white right-0 z-20 cursor-pointer flex items-center"
            >
              {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
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
      <div className="h-full sm:px-10 px-4 sm:py-10 py-4">
        <div className="bg-white w-full h-full rounded-md sm:p-10 p-4 ">
          <div className=" sm:px-20 px-10 ">
            <div className=" flex justify-center mb-10">
              <h1 className=" text-3xl font-bold">Documents</h1>
            </div>
            <div className=" flex flex-col justify-center gap-4">
              <div className="flex flex-col items-center  gap-4 justify-center">
                <div className="flex flex-col text-center sm:text-start gap-4">
                  <h1 className=" font-semibold underline">
                    วิธีการใช้งานของระบบ LMS Quiz Importer
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 justify-center">
                <Image
                  src="/assets/howto/6.png"
                  width={800}
                  height={720}
                  alt=""
                />
                <h1 className=" font-semibold">Login with CMU account </h1>
              </div>

              <div className="flex flex-col items-center gap-4 justify-center">
                <Image
                  src="/assets/howto/7.png"
                  width={800}
                  height={720}
                  alt=""
                />
                <h1 className="font-semibold">Import Quiz </h1>
              </div>
              <div className="flex flex-col items-center gap-4 justify-center">
                <div className="flex flex-col text-start gap-4 ">
                  <h1 className=" font-semibold underline px-14">
                    วิธีการเขียน Syntax
                  </h1>
                  <div className="flex flex-col px-20">
                    <h1 className=" font-semibold">
                      รูปแบบการใช้ในกรณีที่เป็นกลุ่มคำถาม
                    </h1>
                    <span>G-.........*</span>
                    <span>P-.........*</span>
                    <span>Q-.........*</span>
                    <span>………………..</span>
                    <span>[*Choice1*Choice2*Choice3=*Choice4]</span>
                    <span>end</span>
                    <span className=" font-semibold"> คำอธิบาย</span>
                    <span>G- ตามด้วยชื่อของกลุ่มแล้วใส่*</span>
                    <span>P- ตามด้วยคะแนนของแต่ละคำถามในกลุ่มแล้วใส่*</span>
                    <span>Q- ตามด้วยชื่อของคำถามแล้วใส่*</span>
                    <span className=" font-semibold">คำถาม</span>
                    <span>
                      [*ตามด้วยตัวเลือก] และ ใส่ = หลังตัวเลือกที่เป็นคำตอบ
                    </span>
                    <span>end สิ้นสุดของกลุ่มคำถาม</span>
                  </div>
                  <div className="flex flex-col px-20">
                    <h1 className=" font-semibold">
                      รูปแบบการใช้ในกรณีที่เป็นคำถามไม่มีกลุ่ม
                    </h1>

                    <span>Q-.........*</span>
                    <span>P-.........*</span>
                    <span>………………..</span>

                    <span>[*Choice1*Choice2*Choice3=*Choice4]</span>

                    <span className=" font-semibold"> คำอธิบาย</span>
                    <span>Q- ตามด้วยชื่อของคำถามแล้วใส่*</span>
                    <span>P- ตามด้วยคะแนนของแต่ละคำถามในกลุ่มแล้วใส่*</span>
                    <span>
                      [*ตามด้วยตัวเลือก] และ ใส่ = หลังตัวเลือกที่เป็นคำตอบ
                    </span>
                  </div>

                  <h1 className="text-xl font-semibold">ตัวอย่างการใช้งาน</h1>
                  <div className="flex flex-col border border-slate-400 p-4 rounded-md">
                    <span>G-....1....*</span>
                    <span>P-....2....*</span>
                    <span>Q-....1A....*</span>
                    <span>……ข้อใดไม่ใช่ซอฟแวร์ประสงค์ร้าย?…..</span>
                    <span>[*Redhat=*Virus *Trojan*Security Killer]</span>
                    <span>Q-....1B....*</span>
                    <span> ……ซอฟแวร์ประสงค์ร้ายข้อใดไม่ถูกต้อง?….. </span>
                    <span> [*www=*Security Killer*Spyware*Ransomware]</span>
                    <span> end*</span>
                    <span>Q-....2....* </span>
                    <span>P-....5....* </span>
                    <span>……จริยธรรมคืออะไร?…..</span>
                    <span>
                      [*สิ่งที่ทำแล้วไม่ส่งผลให้คนอื่นทั่วๆไปเดือดร้อน=*สิ่งที่ใครๆก็ทำกันไม่ว่ามันจะกระทบผู้อื่นหรือไม่*ข้อปฏิบัติที่พ่อแม่กำหนดให้*ถูกทุกข้อ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
