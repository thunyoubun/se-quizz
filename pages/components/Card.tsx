import React from "react";
import { BsCheckCircle, BsListCheck } from "react-icons/bs";

const Card = () => {
  return (
    <div className=" bg-white dark:bg-gray-600  rounded-md p-4 shadow-lg">
      <div className=" flex justify-between text-sm dark:text-white font-semibold">
        <h1>1. ปรนัย</h1>
        <div className="flex align-middle items-center dark:text-black gap-2 bg-slate-100 rounded-md p-2">
          <BsCheckCircle />
          <h1>
            <span>1 จุด </span>
          </h1>
        </div>
      </div>
      <div className="p-2 dark:text-white">
        <h1>
          Find the percent increase. Round to the nearest percent. From $5 to $8
        </h1>
      </div>
      <hr className=" my-4 dark:text-white" />

      <form action="" method="post">
        <div className="flex mb-2  dark:text-white ">
          <div className="flex align-middle items-center  w-1/2 gap-2">
            <input
              type="radio"
              id="ans1"
              name="ans1"
              value="40%"
              className="h-4 w-4"
            />
            <label htmlFor="ans1" className=" text-base">
              40%
            </label>
          </div>
          <div className="flex align-middle items-center w-1/2 gap-2">
            <input type="radio" className="h-4 w-4" />
            <label className=" text-base">50%</label>
          </div>
        </div>
        <div className="flex dark:text-white  ">
          <div className="flex align-middle items-center w-1/2 gap-2">
            <input type="radio" className="h-4 w-4" />
            <label className=" text-base">40%</label>
          </div>
          <div className="flex align-middle items-center w-1/2 gap-2">
            <input type="radio" className="h-4 w-4" />
            <label className=" text-base">50%</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Card;
