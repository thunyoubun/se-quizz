import React from "react";

const HeadQuizz = () => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 flex justify-between ">
      <div className=" flex gap-2  ">
        <div className=" bg-violet-500 hover:bg-violet-600 rounded-md h-36 w-36"></div>
        <div className="  ">
          <div className=" ">
            <h1 className=" text-sm text-orange-300 font-semibold">Subject</h1>
            <h1 className=" text-lg  font-semibold">Software Architech</h1>
          </div>

          <div className="">
            <h1 className="text-black opacity-50">Author</h1>
            <h1 className=" font-medium">Switch</h1>
          </div>
          <div className="">
            <h1 className="text-black opacity-50">POINT</h1>
            <h1 className=" font-medium">-/20</h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center align-middle  ">
        <h1 className="  text-zinc-500">คำถามทั้งหมด</h1>
        <h1 className="md:text-5xl text-2xl text-black/70">20 ข้อ</h1>
      </div>
    </div>
  );
};

export default HeadQuizz;
