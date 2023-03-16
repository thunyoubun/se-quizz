import axios from "axios";
// import { getCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../../contexts/auth";

export declare type props = {
  user: any;
};

const ModalToken = ({ user }: props) => {
  /* const { data: session, status } = useSession(); */
  const { loading, token, isAuthenticated } = useAuth();
  const [author, setAuthor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [category, setCategory] = useState("");
  const [quizFile, setQuizFile] = useState("");
  const [quizs, setQuizs] = useState([]);
  const route = useRouter();
  const [isLoading, setLoading] = useState(false);
  const date = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    if (user != null || user != undefined) {
      setAuthor(user?.firstName + " " + user?.lastName);
    }
    if (user.quizToken == "") {
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const updateMenu = () => {
    if (!showModal) {
      setShowModal(true);
      document.getElementById("modal-w")?.classList.add("modal-expand");
    } else {
      setShowModal(false);
      document.getElementById("modal-w")?.classList.remove("modal-expand");
    }
  };

  const callPutUser = async () => {
    try {
      const url = `/api/user`;
      const data = {
        name: user.firstName,
        Lname: user.lastName,
        quizToken: userToken,
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
        Swal.fire({
          title: "Success",
          text: "Your token has been added",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: err.response.data.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      {showModal ? (
        <div
          id="modal-w"
          className=" bg-black/20 w-full h-screen absolute z-30"
        >
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full mx-4   my-6  max-w-lg translate-x-0 transition-transform  duration-300 ease-in-out animate-modalAnimate ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
                <div className="flex bg-blue-400 text-white items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-semibold">Set Token</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
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
                      <div className="my-4 border-2 bg-gray-100 dark:bg-gray-800 border-slate-200 p-2 rounded-md">
                        <h1 className=" dark:text-white">
                          Look like this is your first time.
                        </h1>
                        <h1 className=" dark:text-white">
                          You have to set token before upload quizs.
                        </h1>
                        <a
                          href="https://mango-cmu.instructure.com/profile/settings"
                          className=" text-blue-500 hover:text-blue-600 underline"
                        >
                          <h1>How to get token</h1>
                        </a>
                      </div>
                      <label className="block text-black dark:text-white text-sm font-bold mb-1">
                        Quiz Token
                      </label>
                      <input
                        id="token"
                        required
                        onChange={(e) => {
                          if (e) setUserToken(e.target.value);
                        }}
                        value={userToken}
                        type="text"
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
                      <p className=" text-5xl font-semibold text-gray-600 dark:text-white">
                        Converting...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalToken;
