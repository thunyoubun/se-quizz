import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalQuiz from "../components/myquizzes/ModalQuiz";
import axios from "axios";
import { MdOutlineNotStarted } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Head from "next/head";
import QuizzesTable from "../components/myquizzes/QuizzesTable";

export default function Dashboard({ data, user }: any) {
  const [authData, setAuthData] = useState(null);
  const [quizs, setQuizs] = useState([]);
  const route = useRouter();

  return (
    <div className=" flex leading-default bg-gray-100 dark:bg-gray-600 h-fit min-h-screen   w-full   ">
      <Head>
        <title>EasyQ - My Quizzes</title>
        <meta property="og:title" content="EasyQ - My Quizzes" key="title" />
      </Head>
      <div className=" fixed bg-no-repeat bg-cover  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/15b759ff-b0f7-49d8-afba-6d458ff6cc37.jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar quizCount={data.length.toString()} />
      </div>
      <ModalQuiz user={user} />
      <div
        className="z-10 container w-full overflow-y-auto relative
        h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar prePath="Pages" pathName="My Quizzes" user={user} />

        {/* table 1*/}

        <QuizzesTable data={data}></QuizzesTable>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }: any) => {
  const token = getCookie("cmu-oauth-example-token", { req, res });

  if (!token) {
    return {
      redirect: {
        destination: `${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`,
        permant: false,
      },
    };
  } else {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/quiz`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    const quiz = data.findQuiz;

    const res2 = await fetch(`${process.env.NEXTAUTH_URL}api/user`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data2 = await res2.json();
    const user = data2.user;
    return {
      props: {
        user: user,
        data: quiz,
      },
    };
  }
};
