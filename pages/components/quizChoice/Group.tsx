import React from "react";
import { BsCheckCircle, BsListCheck } from "react-icons/bs";
import Card from "./Card";

export declare type props = {
  id: any;
  value: any;
};

const group = [1, 2, 3, 4, 5];

const Group = ({ id, value }: props) => {
  return (
    <>
      <div className=" bg-white dark:bg-gray-600  rounded-md p-4 shadow-lg">
        <div className=" flex justify-between text-sm dark:text-white font-semibold">
          <h1>{id}. ปรนัย</h1>
          <div className="flex align-middle items-center dark:text-black gap-2 bg-slate-100 rounded-md p-2">
            <BsCheckCircle />
            <h1>
              <span>{value["question[points_possible]"]} จุด </span>
            </h1>
          </div>
        </div>
        <div className="p-2 dark:text-white">
          <h1>{value}</h1>
        </div>
        <hr className=" my-4 dark:text-white" />
      </div>
      <div className=" my-2 px-4 ">
        {group.map((x: any, index: any) => {
          return (
            <div className="my-2">
              <Card value={x} id={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Group;
