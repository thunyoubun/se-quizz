import axios from "axios";
import { getCookie } from "cookies-next";
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

const ModalQuiz = ({ user }: props) => {
  /* const { data: session, status } = useSession(); */
  const { loading, token, isAuthenticated } = useAuth();
  const [author, setAuthor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [quizText, setQuizText] = useState("");
  const [category, setCategory] = useState("");
  const [quizFile, setQuizFile] = useState("");
  const [quizs, setQuizs] = useState([]);
  const route = useRouter();
  const date = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    if (isAuthenticated || user) {
      setAuthor(user?.firstName + " " + user?.lastName);
    }
  });

  const updateMenu = () => {
    if (!showModal) {
      setShowModal(true);
      document.getElementById("modal-w")?.classList.add("modal-expand");
    } else {
      setShowModal(false);
      document.getElementById("modal-w")?.classList.remove("modal-expand");
    }
  };

  const callGetQuiz = async () => {
    try {
      const resp = await axios.get("/api/quiz");
      if (resp.data.ok) setQuizs(resp.data.quiz);
    } catch (err: any) {
      console.log(err.response.data.mesasge);
    }
  };

  const callPostQuiz = async () => {
    try {
      const resp = await axios.post("/api/quiz", {
        title: quizText,
        category: category,
        date: date,
        auth: author,
        file: quizFile,
        status: "Online",
      });
      if (resp.data.ok) {
        await callGetQuiz();
        setQuizFile("");
        /*    route.reload(); */
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
    setShowModal(false);
  };

  return (
    <>
      <button
        className="z-20 flex fixed right-12 bottom-10  shadow-xl  rounded-full p-3 cursor-pointer hover:bg-blue-700 bg-blue-600 ho text-white"
        type="button"
        onClick={() => updateMenu()}
      >
        <BsPlusLg size={20} />
      </button>

      {showModal ? (
        <div
          id="modal-w"
          className=" bg-black/20 w-full h-screen absolute z-30"
        >
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full mx-4   my-6  max-w-lg translate-x-0 transition-transform duration-300 ease-in-out animate-modalAnime ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none">
                <div className="flex bg-blue-400 text-white items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-semibold">Import Quiz</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <div className="text-white  opacity-7 text-xl block hover:bg-red-600 bg-red-500 py-0 rounded-full">
                      <IoClose size={30} />
                    </div>
                  </button>
                </div>
                <div className="relative px-6 flex-auto">
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
                      onChange={(e) => setQuizText(e.target.value)}
                      value={quizText}
                      className="appearance-none focus:outline-none focus:shadow-outline  focus:border-blue-500 leading-tight border-2  rounded w-full my-2 p-2 text-black"
                    />
                    <label className="block text-black dark:text-white text-sm font-bold mb-1">
                      Category
                    </label>
                    <input
                      id="category"
                      required
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      className="appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500 leading-tight border-2  rounded w-full my-2 p-2 text-black"
                    />
                    <label className="block text-black dark:text-white text-sm font-bold mb-1">
                      Author
                    </label>
                    <input
                      id="author"
                      value={author}
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
                      onChange={(e) => setQuizFile(e.target.value)}
                      onDrop={(e) => e.preventDefault()}
                      value={quizFile}
                      accept=".docx"
                      required
                      className="  w-full py-2 px-1 text-black dark:text-white"
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
