import axios from "axios";
import Link from "next/link";
import React from "react";

export declare type props = {
  pathName: string;
  id: string;
  subject: string;
  auth: string;
  date: number;
};

function Table({ pathName, id, subject, auth, date }: props) {
  return (
    <tr>
      <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <div className="flex  py-1">
          <div className="flex flex-col justify-center">
            <h6 className="mb-0 text-sm leading-normal dark:text-white">
              {subject}
            </h6>
          </div>
        </div>
      </td>
      <td className="p-2 px-6 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">
          {auth}
        </p>
      </td>

      <td className="p-2 px-6 text-start align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
        <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
          {date}
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
        <Link
          href={"/admin/quiz/" + pathName}
          className=" text-base font-semibold leading-tight dark:text-green dark:opacity-80 text-white bg-green-500 px-4 py-1 rounded-md hover:bg-green-600"
        >
          START
        </Link>
      </td>
    </tr>
  );
}

export default Table;
