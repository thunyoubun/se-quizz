import React from "react";
import { BsCheckCircle, BsListCheck } from "react-icons/bs";
import { QuestionPayload } from "../../../types/QuestionType";

export declare type props = {
  id: any;
  value: QuestionPayload;
};

const Card = ({ id, value }: props) => {
  return (
    <div className=" bg-white dark:bg-gray-600  rounded-md p-4 shadow-lg">
      <div className=" flex justify-between text-sm dark:text-white font-semibold">
        <h1>
          {id}.
          {value?.["question[question_type]"] === "multiple_choice_question"
            ? "ปรนัย"
            : "อัตนัย"}
        </h1>
        <div className="flex align-middle items-center dark:text-black gap-2 bg-slate-100 rounded-md p-2">
          <BsCheckCircle />
          <h1>
            <span>{value?.["question[points_possible]"]} จุด </span>
          </h1>
        </div>
      </div>
      <div className="p-2 dark:text-white">
        <h1>{value?.["question[question_name]"]}</h1>
      </div>
      <hr className=" my-4 dark:text-white" />

      <form action="" method="post">
        <fieldset>
          <div className=" w-full">
            <div className="flex align-middle justify-center items-center   gap-2">
              <div className=" w-1/2 flex gap-2">
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                {value?.["question[answers][0][answer_weight]"] === 100 ? (
                  <label htmlFor="ans1" className="text-green-500 text-base">
                    {value?.["question[answers][0][answer_text]"]}
                  </label>
                ) : (
                  <label htmlFor="ans1" className=" text-base">
                    {value?.["question[answers][0][answer_text]"]}
                  </label>
                )}
              </div>
              <div className=" w-1/2 flex gap-2">
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                {value?.["question[answers][1][answer_weight]"] === 100 ? (
                  <label htmlFor="ans1" className="text-green-500 text-base">
                    {value?.["question[answers][1][answer_text]"]}
                  </label>
                ) : (
                  <label htmlFor="ans1" className=" text-base">
                    {value?.["question[answers][1][answer_text]"]}
                  </label>
                )}
              </div>
            </div>
            <div className="flex align-middle justify-center items-center   gap-2">
              <div className=" w-1/2 flex gap-2">
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                {value?.["question[answers][2][answer_weight]"] === 100 ? (
                  <label htmlFor="ans1" className="text-green-500 text-base">
                    {value?.["question[answers][2][answer_text]"]}
                  </label>
                ) : (
                  <label htmlFor="ans1" className=" text-base">
                    {value?.["question[answers][2][answer_text]"]}
                  </label>
                )}
              </div>
              <div className=" w-1/2 flex gap-2">
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                {value?.["question[answers][3][answer_weight]"] === 100 ? (
                  <label htmlFor="ans1" className="text-green-500 text-base">
                    {value?.["question[answers][3][answer_text]"]}
                  </label>
                ) : (
                  <label htmlFor="ans1" className=" text-base">
                    {value?.["question[answers][3][answer_text]"]}
                  </label>
                )}
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Card;
