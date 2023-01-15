import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Footer from "../components/Footer";
import { getSession } from "next-auth/react";

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const Inbox = () => {
  return (
    <div className=" flex leading-default bg-gray-100 h-fit min-h-screen   w-full   ">
      <div className=" fixed  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/436e7996-fb0f-41f6-a3fd-cf9acd73cf9c.jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar />
      </div>
      <div className=" z-20 flex fixed right-12 bottom-10  shadow-xl  rounded-full p-3 cursor-pointer hover:bg-blue-700 bg-blue-600 ho text-white">
        <BsPlusLg size={20} />
      </div>
      <div
        className="z-10 container w-full overflow-y-auto relative
        h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar prePath="Pages" pathName="inbox" />

        {/* table 1*/}
        <div className="w-full  mt-10 ">
          <div className="w-full  h-max md:px-7 px-3  ">
            <div className=" border-3 border-black rounded-md p-4 overflow-x-auto shadow-xl bg-white">
              <div className=" mt-3 px-6 w-full flex justify-between relative">
                <h1 className=" text-lg font-semibold text-gray-600">Inbox</h1>
              </div>
              <table className="items-center w-full mb-0 align-top border-collapse   dark:border-white/40 text-slate-500">
                <thead className=" align-bottom   ">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Subject
                    </th>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      Author
                    </th>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      DATE
                    </th>

                    <th className="px-6 py-3 w-fit font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                </thead>
                <tbody className=" ">
                  <tr>
                    <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex  py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">
                            I need more features
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                        CEO
                      </p>
                    </td>

                    <td className="p-2 px-6 text-start align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                        08/01/23
                      </span>
                    </td>

                    <td className="p-2  align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a
                        href="#"
                        className=" text-base font-semibold leading-tight dark:text-green dark:opacity-80 text-white bg-green-500 px-4 py-1 rounded-md hover:bg-green-600"
                      >
                        READ
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permant: false,
      },
    };
  }
  return {
    props: { session: await getSession(context) },
  };
}
