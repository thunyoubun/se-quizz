import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { AiFillSignal } from "react-icons/ai";

import {
  BiRightTopArrowCircle,
  BiLeftDownArrowCircle,
  BiBoltCircle,
} from "react-icons/bi";

import { getCookie } from "cookies-next";
import Head from "next/head";
import ChartQuiz from "../components/ChartQuiz";
import axios from "axios";
import DashboardTable from "../components/dashboard/DashboardTable";

const categorys = ["Mid Term", "Final", "Quiz"];

const Myquiz = ({ user, quiz, q_static }: any) => {
  return (
    <div className=" flex leading-default bg-gray-100 dark:bg-gray-600 h-fit min-h-screen   w-full   ">
      <Head>
        <title>EasyQ - Dashboard</title>
        <meta property="og:title" content="EasyQ - Dashboard" key="title" />
      </Head>
      <div className=" fixed  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/3baedb35-438f-4e0f-8d1d-2b9724d36951.jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar quizCount={quiz.length.toString()} />
      </div>
      <div
        className="z-10 container w-full overflow-y-auto relative
        h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar prePath="Pages" pathName="Dashboard" user={user} />

        <div className="w-full   mt-10 px-7 ">
          <div className="w-full ">
            <div className="w-full flex md:flex-row flex-col md:gap-1 gap-1 ">
              {/*  card1 */}
              <div className="w-full md:w-1/2 md:my-4 my-2">
                <div className="px-3 flex ">
                  <div className="  flex justify-center align-middle ">
                    <div className="bg-green-400 shadow-green-600 shadow-xl h-full w-4 rounded-tl-md rounded-bl-md"></div>
                  </div>
                  <div className="w-full  flex rounded-tr-md rounded-br-md p-4 shadow-xl bg-white dark:bg-gray-800  ">
                    <div className=" text-start w-2/3 md:w-full">
                      <h1 className=" text-slate-400 dark:text-white text-md">
                        Subject
                      </h1>
                      <p className=" font-semibold text-xl truncate dark:text-white ">
                        261111 Internet and Online Community
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  card 2 */}
              {/* <div className="w-full md:w-1/2 md:my-4 my-2">
                <div className="px-3 flex justify-center ">
                  <div className="  flex justify-center align-middle ">
                    <div className="bg-red-400 shadow-red-600 shadow-xl h-full w-4 rounded-tl-md rounded-bl-md"></div>
                  </div>
                  <div className="w-full flex rounded-tr-md rounded-br-md p-4 shadow-xl bg-white dark:bg-gray-800  ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 dark:text-white text-md">
                        Category
                      </h1>
                      <p className=" font-semibold text-xl truncate dark:text-white ">
                        {categorys.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/*  card 3*/}
              <div className="w-full md:w-1/2 md:my-4 my-2">
                <div className="px-3 flex justify-center ">
                  <div className="  flex justify-center align-middle ">
                    <div className="bg-blue-400 shadow-yellow-600 shadow-xl h-full w-4 rounded-tl-md rounded-bl-md"></div>
                  </div>
                  <div className="w-full flex rounded-tr-md rounded-br-md p-4 shadow-xl bg-white dark:bg-gray-800  ">
                    <div className=" text-start">
                      <h1 className=" text-slate-400 dark:text-white text-md">
                        All Quiz
                      </h1>
                      <p className=" font-semibold text-xl truncate dark:text-white ">
                        3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 4*/}
              {/*  <div className="w-full md:w-1/4 md:my-4 my-2">
                <div className="px-3">
                  <div className="flex rounded-md p-4 shadow-xl bg-white dark:bg-gray-800  ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 dark:text-white text-md">
                        Least Subject
                      </h1>
                      <h1 className=" font-semibold text-xl ">Math</h1>
                    </div>
                    <div className=" w-1/3 flex justify-center align-middle">
                      <div className=" bg-green-500 h-12 w-12 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* table 2*/}
          <div className="w-full  h-max px-3 mt-2 md:mt-0  ">
            <div className="  rounded-md p-4 overflow-x-auto shadow-xl bg-white dark:bg-gray-800 ">
              <div className=" my-3 px-6  flex gap-2 justify-start relative dark:text-white">
                <AiFillSignal size={25} />
                <h1 className=" text-lg font-semibold text-gray-600 dark:text-white">
                  Quizzes
                </h1>
              </div>
              {/*Category lists*/}
              <div className=" overflow-x-auto">
                <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                  <thead className=" align-bottom    ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                      >
                        Points
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorys.map((x: any, index: any) => {
                      return (
                        <DashboardTable
                          category={x}
                          key={index}
                          data={q_static[index]}
                          index={index}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myquiz;

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

    const res1 = await fetch(`${process.env.NEXTAUTH_URL}api/quiz`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data1 = await res1.json();
    const quiz = data1.findQuiz;

    const promises = quiz.map(async (x: any) => {
      const url = `https://mango-cmu.instructure.com/api/v1/courses/1306/quizzes/${x.id}/statistics`;
      const res = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.quizToken}`,
        },
      });
      const data = await res.json();

      return data.quiz_statistics;
    });

    const responses = await Promise.all(promises);

    return {
      props: {
        token: token,
        user: user,
        quiz: quiz,
        q_static: responses,
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
