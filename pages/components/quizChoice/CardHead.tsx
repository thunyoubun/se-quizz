import React from "react";

const CardHead = () => {
  return (
    <div className=" my-4">
      <div className="w-1/4 px-3">
        <div className="flex rounded-md p-4 shadow-xl bg-white ">
          <div className="w-2/3 text-start">
            <h1 className=" text-slate-400 text-md">All Quiz</h1>
            <h1 className=" font-semibold text-xl">10</h1>
          </div>
          <div className=" w-1/3 flex justify-center align-middle">
            <div className="bg-yellow-400 h-12 w-12 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHead;
