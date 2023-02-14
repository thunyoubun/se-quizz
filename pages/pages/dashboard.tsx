import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { AiFillSignal, AiOutlineRise } from "react-icons/ai";
import { useSession, getSession, signIn } from "next-auth/react";
import { useAuth } from "../../contexts/auth";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next";
import { getCookie } from "cookies-next";

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const Dashboard = () => {
  const { user, loading, token, isAuthenticated } = useAuth();
  return (
    <div className=" flex leading-default bg-gray-100 h-fit min-h-screen   w-full   ">
      <div className=" fixed  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/3baedb35-438f-4e0f-8d1d-2b9724d36951.jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
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
        <Navbar prePath="Pages" pathName="Dashboard" />

        <div className="w-full   mt-10 px-7 ">
          <div className="w-full ">
            <div className="w-full flex md:flex-row flex-col ">
              {/*  card1 */}
              <div className="w-full md:w-1/4 md:my-4 my-2">
                <div className="px-3">
                  <div className="flex rounded-md p-4 shadow-xl bg-white ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 text-md">All Quiz</h1>
                      <h1 className=" font-semibold text-xl">11</h1>
                    </div>
                    <div className=" w-1/3 flex justify-center align-middle">
                      <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center align-middle  text-justify">
                        {/* <AiOutlineRise size={42} /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 2 */}
              <div className="w-full md:w-1/4 md:my-4 my-2">
                <div className="px-3">
                  <div className="flex rounded-md p-4 shadow-xl bg-white ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 text-md">All Subject</h1>
                      <h1 className=" font-semibold text-xl">4</h1>
                    </div>
                    <div className=" w-1/3 flex justify-center align-middle">
                      <div className="bg-red-400 h-12 w-12 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 3*/}
              <div className="w-full md:w-1/4 md:my-4 my-2">
                <div className="px-3">
                  <div className="flex rounded-md p-4 shadow-xl bg-white ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 text-md">Most Subject</h1>
                      <h1 className=" font-semibold text-xl truncate ">
                        Software Engineering
                      </h1>
                    </div>
                    <div className=" w-1/3 flex justify-center align-middle">
                      <div className="bg-blue-400 h-12 w-12 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  card 4*/}
              <div className="w-full md:w-1/4 md:my-4 my-2">
                <div className="px-3">
                  <div className="flex rounded-md p-4 shadow-xl bg-white ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 text-md">Least Subject</h1>
                      <h1 className=" font-semibold text-xl">Math</h1>
                    </div>
                    <div className=" w-1/3 flex justify-center align-middle">
                      <div className=" bg-green-500 h-12 w-12 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* table 2*/}
          <div className="w-full  h-max px-3 mt-2 md:mt-0  ">
            <div className="  rounded-md p-4 overflow-x-auto shadow-xl bg-white">
              <div className=" my-3 px-6  flex gap-2 justify-start relative">
                <AiFillSignal size={25} />
                <h1 className=" text-lg font-semibold text-gray-600">
                  Subject
                </h1>
              </div>

              <div className=" overflow-x-auto">
                <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b w-2/5 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center gap-2">
                          <div className="flex h-12 w-12">
                            <span className=" bg-violet-400 rounded-full h-full w-full"></span>
                          </div>
                          <div className="text-start">
                            <h1 className=" text-slate-400 text-sm">
                              Subject:
                            </h1>
                            <h1 className=" font-semibold">Math</h1>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Accuracy:</h1>
                          <h1 className=" font-semibold">53.61%</h1>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Quiz:</h1>
                          <h1 className=" font-semibold">2</h1>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b w-2/5 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center gap-2">
                          <div className="flex h-12 w-12">
                            <span className=" bg-orange-400 rounded-full h-full w-full"></span>
                          </div>
                          <div className="text-start">
                            <h1 className=" text-slate-400 text-sm">
                              Subject:
                            </h1>
                            <h1 className=" font-semibold">
                              Software Engineering
                            </h1>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Accuracy:</h1>
                          <h1 className=" font-semibold">87.68%</h1>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Quiz:</h1>
                          <h1 className=" font-semibold">5</h1>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b w-2/5 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center gap-2">
                          <div className="flex h-12 w-12">
                            <span className=" bg-green-400 rounded-full h-full w-full"></span>
                          </div>
                          <div className="text-start">
                            <h1 className=" text-slate-400 text-sm">
                              Subject:
                            </h1>
                            <h1 className=" font-semibold">Database</h1>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Accuracy:</h1>
                          <h1 className=" font-semibold">60.66%</h1>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Quiz:</h1>
                          <h1 className=" font-semibold">1</h1>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b w-2/5 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center gap-2">
                          <div className="flex h-12 w-12">
                            <span className=" bg-violet-600 rounded-full h-full w-full"></span>
                          </div>
                          <div className="text-start">
                            <h1 className=" text-slate-400 text-sm">
                              Subject:
                            </h1>
                            <h1 className=" font-semibold">OS</h1>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Accuracy:</h1>
                          <h1 className=" font-semibold">70.66%</h1>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Quiz:</h1>
                          <h1 className=" font-semibold">3</h1>
                        </div>
                      </td>
                    </tr>
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

export default Dashboard;

export const getServerSideProps = ({ req, res }: any) => {
  const token = getCookie("cmu-oauth-example-token", { req, res });

  if (!token) {
    return {
      redirect: {
        destination: `${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`,
        permant: false,
      },
    };
  } else {
    return {
      props: {
        token: token,
      },
    };
  }
};
