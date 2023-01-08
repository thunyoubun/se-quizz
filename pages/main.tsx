import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const main = () => {
  return (
    <div className=" flex leading-default bg-gray-100 h-fit min-h-screen   w-full   ">
      <div className=" fixed  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-60"></span>
      </div>
      <div className="z-10  md:p-6 mb-2">
        <Sidebar />
      </div>
      <div className=" z-20 flex fixed right-12 bottom-10  shadow-xl  rounded-full p-3 cursor-pointer hover:bg-blue-700 bg-blue-600 ho text-white">
        <BsPlusLg size={20} />
      </div>
      <div className="z-10 container w-full overflow-y-auto  h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl ">
        <Navbar />

        {/* table 1*/}
        <div className="w-full  mt-10 ">
          <div className="w-full  h-max md:px-7 px-3 ">
            <div className=" border-3 border-black rounded-md p-4 overflow-x-hidden bg-white shadow-lg">
              <div className=" mt-3 px-6 w-full flex justify-between relative">
                <h1 className=" text-lg font-semibold text-gray-600">
                  My Quizz
                </h1>
                {/* <div className="flex mr-12  text-center items-center align-middle text-2xl text-white px-2 bg-green-400 rounded-md">
              ADD
            </div> */}
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
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      POINTS
                    </th>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                </thead>
                <tbody className=" ">
                  {items.map((item, index) => {
                    return <Table key={index}></Table>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
