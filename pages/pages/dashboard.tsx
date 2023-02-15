import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { AiFillSignal } from "react-icons/ai";
import { useAuth } from "../../contexts/auth";
import { getCookie } from "cookies-next";
import Head from "next/head";

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const Myquiz = ({ user }: any) => {
  const { loading, token, isAuthenticated, setUser } = useAuth();
  return (
    <div className=" flex leading-default bg-gray-100 dark:bg-gray-600 h-fit min-h-screen   w-full   ">
      <Head>
        <title>EasyQ - Dashboard</title>
      </Head>
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
        <Navbar prePath="Pages" pathName="Dashboard" user={user} />

        <div className="w-full   mt-10 px-7 ">
          <div className="w-full ">
            <div className="w-full flex md:flex-row flex-col ">
              {/*  card1 */}
              <div className="w-full md:w-1/2 md:my-4 my-2">
                <div className="px-3">
                  <div className="flex rounded-md p-4 shadow-xl bg-white dark:bg-gray-800  ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 dark:text-white text-md">
                        Subject
                      </h1>
                      <h1 className=" font-semibold text-xl truncate dark:text-white ">
                        261111 Internet and Online Community
                      </h1>
                    </div>
                    <div className=" w-1/3 flex justify-center align-middle">
                      <div className="bg-blue-400 h-12 w-12 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  card 2 */}
              <div className="w-full md:w-1/4 md:my-4 my-2">
                <div className="px-3">
                  <div className="flex rounded-md p-4 shadow-xl bg-white dark:bg-gray-800  ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 dark:text-white text-md">
                        All Category
                      </h1>
                      <h1 className=" font-semibold text-xl dark:text-white">
                        1
                      </h1>
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
                  <div className="flex rounded-md p-4 shadow-xl bg-white dark:bg-gray-800 ">
                    <div className="w-2/3 text-start">
                      <h1 className=" text-slate-400 dark:text-white text-md">
                        All Quiz
                      </h1>
                      <h1 className=" font-semibold text-xl dark:text-white">
                        2
                      </h1>
                    </div>
                    <div className=" w-1/3 flex justify-center align-middle">
                      <div className="bg-yellow-400 h-12 w-12 rounded-full flex items-center align-middle  text-justify">
                        {/* <AiOutlineRise size={42} /> */}
                      </div>
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
                  Category
                </h1>
              </div>

              <div className=" overflow-x-auto">
                <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                  <tbody>
                    <tr className="dark:hover:bg-gray-500 hover:bg-gray-100 rounded-md">
                      <td className="p-2 align-middle bg-transparent border-b w-4/5 whitespace-nowrap dark:border-white/40">
                        <div className="flex items-center gap-2">
                          <div className="flex h-12 w-12">
                            <span className=" bg-violet-400 rounded-full h-full w-full"></span>
                          </div>
                          <div className="text-start">
                            <h1 className=" text-slate-400 text-sm">
                              Category:
                            </h1>
                            <h1 className=" font-semibold dark:text-white">
                              Mid Term
                            </h1>
                          </div>
                        </div>
                      </td>
                      {/* <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Accuracy:</h1>
                          <h1 className=" font-semibold dark:text-white">
                            53.61%
                          </h1>
                        </div>
                      </td> */}
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                        <div className="text-center">
                          <h1 className=" text-slate-400 text-sm">Quiz:</h1>
                          <h1 className=" font-semibold dark:text-white">2</h1>
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

    return {
      props: {
        token: token,
        user: user,
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
