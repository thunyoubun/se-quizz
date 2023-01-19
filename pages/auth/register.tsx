import React, { useState } from "react";
import { useEffect } from "react";
import Router from "next/router";
import { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { ImSwitch } from "react-icons/im";
import axios from "axios";

const Register = () => {
  const { data: session } = useSession();

  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirm] = useState("");

  function checkPassword(password1: any, password2: any) {
    if (password1 !== password2) {
      return alert("Password not match");
    }
  }

  const Login = async () => {
    try {
      const resp = await axios.post("/api/auth/login", {
        username: username,
        password: password,
      });
      if (resp.data.ok) Router.push("pages/myquizz");
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  const callPostUser = async () => {
    checkPassword(password, confirmPassword);
    try {
      const resp = await axios.post("/api/auth/register", {
        username: username,
        email: email,
        password: password,
        isAdmin: false,
      });
      if (resp.data.ok) await Login();
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 w-full h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover bg-[url('https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg')] relative">
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full  max-w-md z-10">
            <Link
              href="/"
              className=" absolute top-0 left-0 m-4 text-white hover:text-black cursor-pointer hover:border-2 border-blue-500 rounded-full hover:bg-white"
              /* onClick={() => Router.back()} */
            >
              <BsArrowLeft size={30} />
            </Link>
            <div className="sm:text-4xl xl:text-5xl text-violet-500 font-bold leading-tight mb-6">
              <h1>QUIZZ</h1>
            </div>
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <h1> IMPORTER</h1>
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal ">
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book it has?
            </div>
          </div>

          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="md:flex md:h-screen md:items-center md:justify-center md:my-0 h-full flex items-center justify-center sm:w-2/5 sm:h-screen  w-full xl:w-2/5 sm:p-1  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none md:bg-white bg-blue-500">
          <div className="max-w-md w-full mx-2 bg-white md:space-y-8 space-y-0  shadow-lg border sm:border-none rounded-xl px-4 sm:px-0 sm:shadow-none">
            <div className="text-center relative flex flex-col justify-center items-center">
              <Link
                href={"/"}
                className=" absolute  flex md:hidden left-0 top-5 inset-y-0 text-black  hover:scale-105 cursor-pointer "
                /* onClick={() => Router.back()} */
              >
                <BsArrowLeft size={30} />
              </Link>
              <div>
                <ImSwitch size={60} className="my-3 text-blue-600 h-16  " />
              </div>
              <h2 className=" text-3xl font-bold text-gray-900">Sign Up</h2>
              <p className="mt-2 text-sm text-gray-500">
                Please sign up to your account
              </p>
            </div>
            <form
              id="form"
              className="form mt-8 space-y-6"
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" value="true"></input>
              <div className="form-control mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Username
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  id="username"
                  type="text"
                  onChange={(e) => SetUsername(e.target.value)}
                  value={username}
                  placeholder="Enter your username"
                ></input>
                <small className="ml-4   text-red-600">error message</small>
              </div>
              <div className="form-control">
                {/* <div className="absolute right-3 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div> */}

                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="email"
                  id="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your email"
                  required
                ></input>
                <small className="ml-4 text-red-600">error message</small>
              </div>
              <div className="form-control mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  id="password"
                  onChange={(e) => SetPassword(e.target.value)}
                  value={password}
                  placeholder="Enter your password"
                ></input>
                <small className="ml-4 text-red-600">error message</small>
              </div>
              <div className="form-control mt-8 content-center">
                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                  Confirm Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                  id="confirmPassword"
                  type="password"
                  onChange={(e) => SetConfirm(e.target.value)}
                  value={confirmPassword}
                  placeholder="Enter your password"
                ></input>
                <small className="ml-4 text-red-600">error message</small>
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  ></input>
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="text-indigo-400 hover:text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div> */}
              <div>
                <button
                  onClick={() => callPostUser()}
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign Up
                </button>
              </div>
              <p className="flex gap-2 items-center justify-center my-5 text-center text-md text-gray-500">
                <span>Already have an account?</span>
                <Link
                  href="/auth/signin"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Sign In
                </Link>
              </p>
            </form>
            {/* <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-200"></span>
              <span className="text-gray-300 font-normal">
                or continue with
              </span>
              <span className="h-px w-16 bg-gray-200"></span>
            </div> */}

            {/* <div className="flex flex-row justify-center items-center  space-x-3">
              <button
                onClick={() => signIn("google")}
                className=" h-11 items-center justify-center mb-6 sm:mb-0 inline-flex rounded-2xl font-bold text-lg   bg-white border-2 border-indigo-500 hover:shadow-lg hover:scale-105 cursor-pointer transition ease-in duration-300"
              >
                <FcGoogle className="w-12    h-6" />
                <h1 className=" text-ms font-medium pr-6">
                  Continue with Google
                </h1>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/pages/myquizz",
        permant: false,
      },
    };
  }
  return {
    props: { session: await getSession(context) },
  };
}
