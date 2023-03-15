import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsPlusLg } from "react-icons/bs";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import Card from "../../components/quizChoice/Card";

import { MdOutlineNotStarted } from "react-icons/md";
import { RiQuestionAnswerFill } from "react-icons/ri";
import HeadQuizz from "../../components/quizChoice/HeadQuizz";
import Footer from "../../components/Footer";
import { getSession, signIn } from "next-auth/react";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { getCookie } from "cookies-next";
import { QuizPayload } from "../../../types/QuizPayload";
import Head from "next/head";
import Group from "../../components/quizChoice/Group";

const Quizz = ({ user, quiz }: any) => {
  const router = useRouter();
  const [myquizz, Setmyquizz] = useState<QuizPayload>();
  const id = router.query.id;

  const choice = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  useEffect(() => {
    if (quiz) {
      const quizIdx = quiz.findIndex((x: any) => x._id.$oid === id);
      Setmyquizz({ ...quiz[quizIdx] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" flex leading-default bg-gray-100 dark:bg-gray-600 h-fit min-h-screen    w-full   ">
      <Head>
        <title>EasyQ - {myquizz?.category}</title>
        <meta
          property="og:title"
          content={`EasyQ - ${myquizz?.title}`}
          key="title"
        />
      </Head>
      <div className=" fixed  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/24364b58-a36f-4590-9108-f56ff9197926..jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 "></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar quizCount={quiz.length.toString()} />
      </div>
      {/* <div className=" z-20 flex fixed right-12 bottom-10  shadow-xl  rounded-full p-3 cursor-pointer hover:bg-blue-700 bg-blue-600 ho text-white">
        <BsPlusLg size={20} />
      </div> */}
      <div
        className="z-10 container w-full overflow-y-auto relative
    h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar
          prePath={"My Quizzes"}
          pathName={"Quiz " + myquizz?.title}
          user={user}
        />
        {/* Quizz*/}
        <div className="w-full  mt-10 mb-4  ">
          <div className="w-full  h-max md:px-7 px-3  ">
            <div className="  rounded-md p-4 overflow-x-auto flex flex-col gap-4 bg-gray-200 dark:bg-gray-800  ">
              {/* <div className=" mt-3 px-6 w-full flex justify-between relative">
                <h1 className=" text-lg font-semibold text-gray-600">
                  Quizz {id}
                </h1>
              </div> */}

              <HeadQuizz
                title={myquizz?.title}
                author={myquizz?.author}
                choice={
                  myquizz?.qData?.quiz_groups[0]?.["quiz_groups[][pick_count]"]
                }
              />
              <div className="flex flex-row gap-2">
                <button className=" bg-indigo-600 flex text-center justify-center hover:bg-indigo-500 border-b-4 border-indigo-800 rounded-md p-4 w-full text-white text-xl">
                  <MdOutlineNotStarted size={30} className="mr-2" />
                  Submit Quiz
                </button>
              </div>

              {/* <div className="p-4">
                <div>
                  <h1 className=" text-lg text-opacity-5">20 คำถาม</h1>
                </div>
              </div> */}

              <div className=" flex flex-col gap-2">
                {myquizz?.qData?.quiz_questions?.map(
                  (value: any, index: any) => {
                    return <Card value={value} id={index + 1} key={index} />;
                  }
                )}
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

    const res1 = await fetch(
      `https://sebackend.vercel.app/api/Quiz/${user?.firstName}_${user?.lastName}`
    );
    const data1 = await res1.json();
    const quiz = data1;

    return {
      props: {
        token: token,
        user: user,
        quiz: quiz,
      },
    };
  } else {
    return {
      redirect: {
        destination: `${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`,
        permant: false,
      },
    };
  }
};
