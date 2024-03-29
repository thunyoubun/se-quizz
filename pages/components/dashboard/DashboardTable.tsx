import axios from "axios";
import { getCookie } from "cookies-next";
import router from "next/router";
import React, { useEffect, useState } from "react";
import {
  BiBoltCircle,
  BiLeftDownArrowCircle,
  BiRightTopArrowCircle,
} from "react-icons/bi";
import ChartQuiz from "../ChartQuiz";

const colors = ["red", "green", "blue", "yellow"];

export declare type props = {
  index: any;
  category: string;
  data: any;
};

export default function DashboardTable({ index, category, data }: props) {
  const [onClicked, setOnclicked] = useState(false);
  const [textColor, setTextColor] = useState("text-gray-800");
  const [collap, setCollap] = useState("collapsed");
  const [quizStatic, setStatic] = useState<string | null | undefined | any>([
    {},
  ]);
  const [quizScore, setScores] = useState<string | null | undefined | any>([
    {},
  ]);
  const [course_id, setCourseId] = useState("");
  const [quiz_id, setQuizId] = useState("");

  const changeColor = () => {
    setOnclicked(!onClicked);
    if (!onClicked) {
      setTextColor("text-blue-600");
      setCollap("");
    } else {
      setTextColor("text-gray-800");
      setCollap("collapsed");
    }
  };

  const [userData, setUserData] = useState({
    datasets: [
      {
        label: "Scores",
        data: data?.submission_statistics?.scores,
        backgroundColor: "#6210e6",
        borderColor: "#05bbed",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setStatic(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  function rand(colors: any) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <>
      <tr
        onClick={changeColor}
        id="accordionExample"
        className="accordion dark:hover:bg-gray-500 hover:cursor-pointer   hover:bg-gray-100 rounded-md"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${index}`}
        aria-expanded="true"
        aria-controls={`collapse${index}`}
      >
        <td className="accordion-item p-2 align-middle bg-transparent border-b w-4/5 whitespace-nowrap dark:border-white/40">
          <div
            id="headingOne"
            className=" accordion-header flex items-center gap-2"
          >
            <div className="flex align-middle justify-center h-12 w-12 relative">
              <span
                className={` bg-blue-500  rounded-full h-full w-full`}
              ></span>
              {/* <h1 className=" absolute text-center text-white dark:text-gray-800 align-middle text-3xl pt-1 h-full w-full font-semibold">
                {category.slice(0, 1)}
              </h1> */}
            </div>
            <div className="text-start">
              <h1 className=" text-slate-400 text-sm">Title:</h1>
              <h1 className=" font-semibold dark:text-white">{category}</h1>
            </div>
          </div>
        </td>

        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
          <div className="text-center">
            <h1 className=" font-semibold dark:text-white">
              {quizStatic?.points_possible}
            </h1>
          </div>
        </td>
      </tr>
      <tr
        id={`collapse${index}`}
        aria-labelledby={`heading${index}`}
        data-bs-parent="#accordionExample"
        className={`${
          !onClicked ? " h-0" : "h-[450px]"
        } accordion-collapse   flex justify-center transition-all  duration-500 overflow-hidden   `}
      >
        <td className="accordion-body">
          <div className="flex flex-col justify-center w-full p-4 transition-all duration-1000  ">
            <div className="flex justify-between">
              <div className="  ">
                <div className=" flex gap-2 text-gray-400">
                  <BiBoltCircle size={25} />
                  <h1 className=" text-lg">Average Score</h1>
                </div>
                <h1 className=" text-black font-semibold dark:text-white  text-3xl">
                  {(data?.submission_statistics?.score_average /
                    quizStatic?.points_possible) *
                    100}
                  %
                </h1>
              </div>
              <div className="  ">
                <div className=" flex gap-2 text-gray-400">
                  <BiRightTopArrowCircle size={25} />
                  <h1 className=" text-lg">High Score</h1>
                </div>
                <h1 className=" text-black font-semibold dark:text-white   text-3xl">
                  {(data?.submission_statistics?.score_high /
                    quizStatic?.points_possible) *
                    100}
                  %
                </h1>
              </div>
              <div className="  ">
                <div className=" flex gap-2 text-gray-400">
                  <BiLeftDownArrowCircle size={25} />
                  <h1 className=" text-lg">Low Score</h1>
                </div>
                <h1 className=" text-black font-semibold dark:text-white  text-3xl">
                  {(data?.submission_statistics?.score_high /
                    quizStatic?.points_possible) *
                    100}
                  %
                </h1>
              </div>
            </div>
            <div
              style={{ width: 700 }}
              className="dark:bg-slate-100 rounded-md mt-2 flex justify-center "
            >
              <ChartQuiz chartData={userData} />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
