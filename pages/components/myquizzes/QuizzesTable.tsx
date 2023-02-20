import React, { useState } from "react";

import axios from "axios";
import { MdOutlineNotStarted } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/router";


export default function QuizzesTable({ data }: any) {
    const [quizs, setQuizs] = useState([]);
    const route = useRouter();
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
            if (resp.data.ok) {
                await callGetQuiz();
                route.reload();
            }
        } catch (err: any) {
            alert(err.response.data.message);
        }
    };


    return (
        <div className="w-full  mt-10 ">
            <div className="w-full  h-max md:px-7 px-3  ">
                <div className=" border-3 border-black rounded-md p-4 overflow-x-auto shadow-xl bg-white dark:bg-gray-800 ">
                    <div className=" mt-3 px-6 w-full flex justify-between relative">
                        <h1 className=" text-lg font-semibold text-gray-600 dark:text-white">
                            My Quizzes
                        </h1>
                    </div>

                    <table
                        id="results"
                        className="items-center w-full mb-0 align-top border-collapse    dark:border-white/40 text-slate-500"
                    >
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
                                    className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                                >
                                    Category
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
                                    STATUS
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 w-fit font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70"
                                ></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 ">
                            {data.map((x: any, index: any) => {
                                return (
                                    <tr
                                        key={index}
                                        className=" dark:hover:bg-gray-500 hover:bg-gray-100  rounded-md "
                                    >
                                        <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                            <div className="flex  py-1">
                                                <div className="flex flex-col justify-center">
                                                    <h6 className="mb-0 text-sm font-semibold leading-normal dark:text-white">
                                                        {x.title}
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
                                                {x.category}
                                            </p>
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
                                        <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
                                                {x.status}
                                            </span>
                                        </td>
                                        <td className="p-2 gap-2 flex flex-row justify-center  align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                                            <button
                                                disabled
                                                className="hover:scale-105 text-base font-semibold leading-tight dark:text-green dark:opacity-80 text-white bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600  p-4  tracking-wide  shadow-lg cursor-pointer transition ease-in duration-300 px-4 py-1 rounded-md "
                                            >
                                                <MdOutlineNotStarted size={25} />
                                            </button>
                                            <button
                                                onClick={() => callDeleteQuiz(x.id)}
                                                className="hover:scale-105 text-base font-semibold leading-tight dark:text-green dark:opacity-80 text-white bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600  p-4  tracking-wide  shadow-lg cursor-pointer transition ease-in duration-300 px-4 py-1 rounded-md"
                                            >
                                                <RiDeleteBin5Line size={25} />
                                            </button>
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
    );
}