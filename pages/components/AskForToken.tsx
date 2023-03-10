import axios from "axios";
// import { getCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../contexts/auth";

export declare type props = {
  user: any;
};

export const AskForToken = ({ user }: props) => {
  /* const { data: session, status } = useSession(); */

  const { loading, token, isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [quizToken, setQuizToken] = useState<string | null | undefined | any>(
    ""
  );

  useEffect(() => {
    if (isAuthenticated || user) {
      setQuizToken(user?.quizToken);
    }
  });

  const updateMenu = () => {
    document.getElementById("modal-w")?.classList.remove("modal-expand");
  };

  const callPutUser = async () => {
    try {
      const url = `/api/user`;
      const data = {
        quizToken: quizToken,
      };
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const res = await resp.json();
      if (res.ok) {
        setTimeout(() => {
          setLoading(false);
          setShowModal(false);
        }, 3000);
      }
    } catch (err: any) {
      alert(err);
    }
  };

  return (
    <div id="modal-w" className=" bg-black/20 w-full h-screen absolute z-30">
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full mx-4   my-6  max-w-lg translate-x-0 transition-transform duration-300 ease-in-out animate-modalAnime ">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
            <div className="flex bg-blue-400 text-white items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font-semibold">Quiz Token</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => updateMenu()}
              >
                <div className="text-white  opacity-7 text-xl block hover:bg-red-600 bg-red-500 py-0 rounded-full">
                  <IoClose size={30} />
                </div>
              </button>
            </div>
            <div className="relative px-6 flex-auto ">
              {!isLoading ? (
                <form
                  action=""
                  className=" rounded px-8 pt-6 pb-8 w-full"
                  method="POST"
                >
                  <p className="text-black dark:text-white mb-4">
                    We need token from mango to access api.
                  </p>
                  <p className="text-black dark:text-white mb-4">
                    How to get a token.
                    <Link
                      href="https://mango-cmu.instructure.com/profile/settings"
                      className="mx-2 text-blue-600  underline"
                    >
                      Click Here
                    </Link>
                  </p>
                  <label className="block text-black dark:text-white text-sm font-bold mb-1">
                    Quiz Token
                  </label>
                  <input
                    type="text"
                    defaultValue={quizToken}
                    onChange={(e) => setQuizToken(e.target.defaultValue)}
                    placeholder="Enter your token"
                    className="appearance-none focus:outline-none focus:shadow-outline  focus:border-blue-500 leading-tight border-2  rounded w-full my-2 p-2 text-black"
                  />

                  <Link
                    href={"/pages/myquizzes"}
                    className="w-full flex items-center justify-center py-6 border-t border-solid border-blueGray-200 rounded-b"
                  >
                    <button
                      type="submit"
                      className="text-white w-full  bg-blue-500 hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3  rounded-md shadow-md  outline-none focus:outline-none mr-1 mb-1"
                      onClick={() => callPutUser()}
                    >
                      Submit
                    </button>
                  </Link>
                </form>
              ) : (
                <div className=" flex flex-col my-4 justify-center items-center">
                  <div className="loadingio-spinner-spinner-dtn99hj0z25">
                    <div className="ldio-6w467ibr0lr">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <p className=" text-5xl font-semibold text-gray-600">
                    Converting
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
