import React from "react";

export declare type props = {
  title: string | undefined;
  auth: string | undefined;
  category: string | undefined;
};

const HeadQuizz = ({ title, auth, category }: props) => {
  return (
    <div className="bg-white dark:bg-gray-600 shadow-lg rounded-md p-4 flex justify-between ">
      <div className=" flex gap-2  ">
        <div className=" bg-violet-500 hover:bg-violet-600 rounded-md h-36 w-36"></div>
        <div className=" dark:text-white ">
          <div className=" ">
            <h1 className=" text-sm text-orange-300 font-semibold ">Title</h1>
            <h1 className=" text-lg  font-semibold">{title}</h1>
          </div>

          <div className="">
            <h1 className="text-black opacity-50 dark:text-white">Category</h1>
            <h1 className=" font-medium">{category}</h1>
          </div>
          <div className="">
            <h1 className="text-black opacity-50 dark:text-white">Author</h1>
            <h1 className=" font-medium">{auth}</h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center align-middle dark:text-white  ">
        <h1 className="  text-zinc-500 dark:text-white">คำถามทั้งหมด</h1>
        <h1 className="md:text-5xl text-2xl text-black/70 dark:text-white">
          20 ข้อ
        </h1>
      </div>
    </div>
  );
};

export default HeadQuizz;
