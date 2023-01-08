import React from "react";

function Table() {
  return (
    <tr>
      <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <div className="flex  py-1">
          <div className="flex flex-col justify-center">
            <h6 className="mb-0 text-sm leading-normal dark:text-white">
              Software Engineer
            </h6>
          </div>
        </div>
      </td>
      <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
          Thun Anuntarat
        </p>
      </td>

      <td className="p-2 px-6 text-start align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
          23/04/18
        </span>
      </td>
      <td className="p-2 px-10 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <a
          href=""
          className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400"
        >
          10/10
        </a>
      </td>
      <td className="p-2  align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <a
          href="#"
          className=" text-base font-semibold leading-tight dark:text-green dark:opacity-80 text-white bg-green-500 px-4 py-1 rounded-md hover:bg-green-600"
        >
          EDIT
        </a>
      </td>
    </tr>
  );
}

export default Table;
