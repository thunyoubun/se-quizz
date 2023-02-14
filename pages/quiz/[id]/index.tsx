import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsPlusLg } from "react-icons/bs";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Card from "../../components/Card";

import { MdOutlineNotStarted } from "react-icons/md";
import { RiQuestionAnswerFill } from "react-icons/ri";
import HeadQuizz from "../../components/HeadQuizz";
import Footer from "../../components/Footer";
import { getSession, signIn } from "next-auth/react";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const Quizz = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const choice = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className=" flex leading-default bg-gray-100 h-fit min-h-screen    w-full   ">
      <div className=" fixed  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/24364b58-a36f-4590-9108-f56ff9197926..jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 "></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar />
      </div>
      {/* <div className=" z-20 flex fixed right-12 bottom-10  shadow-xl  rounded-full p-3 cursor-pointer hover:bg-blue-700 bg-blue-600 ho text-white">
        <BsPlusLg size={20} />
      </div> */}
      <div
        className="z-10 container w-full overflow-y-auto relative
    h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar prePath={"Quiz"} pathName={"Quiz " + id} />
        {/* Quizz*/}
        <div className="w-full  mt-10 mb-4  ">
          <div className="w-full  h-max md:px-7 px-3  ">
            <div className="  rounded-md p-4 overflow-x-auto flex flex-col gap-4 bg-gray-200  ">
              {/* <div className=" mt-3 px-6 w-full flex justify-between relative">
                <h1 className=" text-lg font-semibold text-gray-600">
                  Quizz {id}
                </h1>
              </div> */}

              <HeadQuizz />
              <div className="flex flex-row gap-2">
                <button className=" bg-indigo-600 flex text-center justify-center hover:bg-indigo-500 border-b-4 border-indigo-800 rounded-md p-4 w-1/2 text-white text-xl">
                  <MdOutlineNotStarted size={30} className="mr-2" />
                  เริ่มทำข้อสอบ
                </button>
                <button className=" bg-indigo-600 hover:bg-indigo-500 flex text-center justify-center border-b-4 border-indigo-800 rounded-md p-4 w-1/2 text-white text-xl">
                  <RiQuestionAnswerFill size={30} className="mr-2" />
                  ส่งคำตอบ
                </button>
              </div>

              {/* <div className="p-4">
                <div>
                  <h1 className=" text-lg text-opacity-5">20 คำถาม</h1>
                </div>
              </div> */}

              <div className=" flex flex-col gap-4">
                {choice.map((value, index) => {
                  return <Card key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Quizz;

export async function getServerSideProps(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
  });

  if (token) {
    return;
  } else {
    return {
      redirect: {
        destination: `${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`,
        permant: false,
      },
    };
  }
}
