import axios from "axios";
// import { getCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../../contexts/auth";

export declare type props = {
  user: any;
};

const ModalQuiz = ({ user }: props) => {
  /* const { data: session, status } = useSession(); */
  const { loading, token, isAuthenticated } = useAuth();
  const [author, setAuthor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [quizFile, setQuizFile] = useState<File>();
  const [quizId, setQuizId] = useState("");
  const route = useRouter();
  const [isLoading, setLoading] = useState(false);
  const date = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    if (user != null || user != undefined) {
      setAuthor(user?.firstName + "_" + user?.lastName);
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

  const saveQuiz = async () => {
    try {
      const url = `/api/quiz`;
      const data = {
        id: quizId,
        title: title,
        auth: user?.firstName + " " + user?.lastName,
      };
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await resp.json();
    } catch (err: any) {
      console.log(err.response.data.mesasge);
    }
  };

  const callPostQuiz = async () => {
    try {
      var options = {
        method: "POST",
        url: "https://sebackend.vercel.app/api/upload",
        headers: {
          "content-type": "multipart/form-data",
        },
        data: {
          title: title,
          author: user?.firstName + "_" + user?.lastName,
          files: quizFile,
        },
      };

      const resp = await axios
        .request(options)
        .then((res) => {
          return res;
        })
        .catch(function (error) {
          console.error(error);
        });

      if (resp?.data.status) {
        setQuizId("5140");
        await saveQuiz();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setShowModal(false);
          route.push(`/quiz/${resp.data.deviloperID}`);
        }, 3000);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Syntax not correct",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
        setShowModal(false);
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
      <button
        className="z-40 flex fixed right-12 bottom-10  shadow-xl  rounded-full p-3 cursor-pointer hover:bg-blue-700 bg-blue-600 ho text-white"
        type="button"
        onClick={() => updateMenu()}
      >
        <BsPlusLg size={20} />
        <p>&nbsp;New Quiz</p>
      </button>

      {showModal ? (
        <div
          id="modal-w"
          className=" bg-black/20 w-full h-screen absolute z-30"
        >
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full mx-4   my-6  max-w-lg translate-x-0 transition-transform  duration-300 ease-in-out animate-modalAnimate ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
                <div className="flex bg-blue-400 text-white items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-semibold">Upload Quiz</h3>
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
                      <label className="block text-black dark:text-white text-sm font-bold mb-1">
                        Title
                      </label>
                      <input
                        id="subject"
                        required
                        onChange={(e) => {
                          if (e) setTitle(e.target.value);
                        }}
                        value={title}
                        type="text"
                        className="appearance-none focus:outline-none focus:shadow-outline  focus:border-blue-500 leading-tight border-2  rounded w-full my-2 p-2 text-black"
                      />
                      {/* <label className="block text-black dark:text-white text-sm font-bold mb-1">
                        Category
                      </label>
                      <input
                        id="category"
                        type="text"
                        required
                        onChange={(e) => {
                          if (e) setCategory(e.target.value);
                        }}
                        value={category}
                        className="appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 leading-tight border-2  rounded w-full my-2 p-2 text-black"
                      /> */}
                      <label className="block text-black dark:text-white text-sm font-bold mb-1">
                        Author
                      </label>
                      <input
                        id="author"
                        value={user?.firstName + "_" + user?.lastName}
                        disabled
                        className="appearance-none focus:outline-none  focus:shadow-outline focus:border-blue-500 leading-tight border-2  rounded w-full my-2 p-2 text-black"
                      />
                      <label className="block text-black dark:text-white text-sm font-bold mb-1">
                        Files
                        <span className="ml-2 text-red-500">(.docx)</span>
                      </label>
                      <input
                        id="file"
                        type="file"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          if (e.target.files) {
                            setQuizFile(e.target.files[0]);
                            console.warn("Upload!!!");
                          }
                        }}
                        onDrop={(e) => e.preventDefault()}
                        accept=".docx"
                        className=" w-full py-2 px-1 text-black dark:text-white"
                        required
                      />

                      <Link
                        href={"/pages/myquizzes"}
                        className="w-full flex items-center justify-center py-6 border-t border-solid border-blueGray-200 rounded-b"
                      >
                        <button
                          type="submit"
                          className="text-white w-full  bg-blue-500 hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3  rounded-md shadow-md  outline-none focus:outline-none mr-1 mb-1"
                          onClick={() => callPostQuiz()}
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

export default ModalQuiz;
