import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { useSession, getSession, signIn } from "next-auth/react";
import ModalQuiz from "../components/ModalQuiz";
import Link from "next/link";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlineNotStarted } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Myquizz({ data }: any) {
  const { data: session, status } = useSession();
  const [authData, setAuthData] = useState(null);
  const [quizs, setQuizs] = useState([]);

  const callGetQuiz = async () => {
    try {
      const resp = await axios.get("/api/quiz");
      if (resp.data.ok) setQuizs(resp.data.quiz);
    } catch (err: any) {
      console.log(err.response.data.mesasge);
    }
  };

  const callDeleteQuiz = async (id: any) => {
    try {
      const resp = await axios.delete(`/api/quiz/${id}`);
      if (resp.data.ok) await callGetQuiz();
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  /* useEffect(() => {
    if (status === "authenticated") {
      callGetQuiz();
    } else {
      setQuizs([]);
    }
  }, [quizs]); */

  return (
    <div className=" flex leading-default bg-gray-100 h-fit min-h-screen   w-full   ">
      <div className=" fixed bg-no-repeat bg-cover  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/15b759ff-b0f7-49d8-afba-6d458ff6cc37.jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar />
      </div>
      <ModalQuiz />
      <div
        className="z-10 container w-full overflow-y-auto relative
        h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar prePath="Pages" pathName="my quizz" />

        {/* table 1*/}
        <div className="w-full  mt-10 ">
          <div className="w-full  h-max md:px-7 px-3  ">
            <div className=" border-3 border-black rounded-md p-4 overflow-x-auto shadow-xl bg-white">
              <div className=" mt-3 px-6 w-full flex justify-between relative">
                <h1 className=" text-lg font-semibold text-gray-600">
                  My Quizz
                </h1>
              </div>

              <table
                id="results"
                className="items-center w-full mb-0 align-top border-collapse   dark:border-white/40 text-slate-500"
              >
                <thead className=" align-bottom   ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    >
                      Author
                    </th>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      DATE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    >
                      POINTS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 w-fit font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                    ></th>
                  </tr>
                </thead>
                <tbody className=" ">
                  {data
                    .map((x: any, index: any) => {
                      return (
                        <tr
                          key={index}
                          className=" hover:bg-gray-100 rounded-md "
                        >
                          <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <div className="flex  py-1">
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 text-sm font-semibold leading-normal dark:text-white">
                                  {x.subject}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                              {x.auth}
                            </p>
                          </td>

                          <td className="p-2 px-6 text-start align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              {x.date}
                            </span>
                          </td>
                          <td className="p-2 px-10 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              10/10
                            </span>
                          </td>
                          <td className="p-2 gap-2 flex flex-row justify-center  align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                            <Link
                              href={"/quiz/" + x.subject}
                              className="hover:scale-105 text-base font-semibold leading-tight dark:text-green dark:opacity-80 text-white bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600  p-4  tracking-wide  shadow-lg cursor-pointer transition ease-in duration-300 px-4 py-1 rounded-md "
                            >
                              <MdOutlineNotStarted size={25} />
                            </Link>
                            <Link href="/pages/myquizz">
                              <button
                                onClick={() => callDeleteQuiz(x.id)}
                                className="hover:scale-105 text-base font-semibold leading-tight dark:text-green dark:opacity-80 text-white bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600  p-4  tracking-wide  shadow-lg cursor-pointer transition ease-in duration-300 px-4 py-1 rounded-md"
                              >
                                <RiDeleteBin5Line size={25} />
                              </button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                    .reverse()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/quiz`);
  const data = await res.json();
  const quiz = data.quiz;
  console.log(quiz);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permant: false,
      },
    };
  }
  return {
    props: { session: await getSession(context), data: quiz },
  };
}

/* export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/quiz`);
  const quiz = await res.data.quiz;

  // By returning { props: { quiz } }, the Blog component
  // will receive `quiz` as a prop at build time
  return {
    props: {
      quiz,
    },
  };
}
 */
