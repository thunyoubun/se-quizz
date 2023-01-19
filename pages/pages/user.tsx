import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { useSession, getSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";

const User = () => {
  const { data: session, status } = useSession();

  const [avatar, setAvatar] = useState<string | null | undefined | any>("");
  const [username, setUserName] = useState<string | null | undefined | any>("");
  const [Fname, setFname] = useState<string | null | undefined | any>("");
  const [Lname, setLname] = useState<string | null | undefined | any>("");
  console.log(session);

  async function updateUser() {
    const res = await axios({
      method: "PUT",
    });
  }

  useEffect(() => {
    setAvatar(session?.user?.image);
    setUserName(session?.user?.username);
    setFname(session?.user?.name);
    setLname(session?.user?.Lname);

    if (avatar === "" || avatar === null || avatar === undefined) {
      setAvatar("/assets/empty-profile.png");
    }
  }, []);

  return (
    <div className=" flex leading-default bg-gray-100 h-fit min-h-screen   w-full   ">
      <div className=" fixed bg-no-repeat bg-cover  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://media.tenor.com/An_EgVt-nWoAAAAC/city-lofi.gif')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-40"></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar />
      </div>

      <div
        className="z-10 container w-full overflow-y-auto relative p-4
        h-full max-h-screen transition-all duration-200 ease-in-out  rounded-xl "
      >
        <Navbar prePath="Pages" pathName="profile" />

        <div className="w-full  mt-10 flex flex-col gap-8">
          {/* Card 1 */}
          <div className="w-full  h-max md:px-7 px-3  ">
            <div className="  rounded-md p-4 overflow-x-auto shadow-xl  bg-white ">
              <div className=" w-full  h-1/2 relative rounded-md ">
                <div className="">
                  <div className="  flex flex-col gap-2 justify-center items-center text-center p-2 ">
                    <span className=" bg-white h-2/3 w-full absolute bottom-0 -z-10"></span>
                    <span className=" bg-blue-500 h-2/5 w-full absolute top-0 rounded-t-md "></span>

                    <Image
                      src={avatar}
                      width={160}
                      height={160}
                      alt=""
                      className="border-4 bg-contain  border-white   h-40 w-40 rounded-full z-20"
                    />
                    <h1 className=" font-bold text-3xl text-gray-500 z-20">
                      {session?.user?.name}
                    </h1>
                    <div className="flex justify-between gap-10">
                      <div className="flex flex-col">
                        <span className=" text-2xl font-bold text-gray-800">
                          5
                        </span>
                        <span className=" text-gray-400 ">Quiz</span>
                      </div>
                      <div className="flex flex-col">
                        <span className=" text-2xl font-bold text-gray-800">
                          70.77%
                        </span>
                        <span className=" text-gray-400 ">Accuracy</span>
                      </div>
                      <div className="flex flex-col">
                        <span className=" text-2xl font-bold text-gray-800">
                          3
                        </span>
                        <span className=" text-gray-400 ">Done</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block md:flex md:px-7 px-3 gap-8">
            {/*  Card 2 */}
            <div className="w-full md:w-2/3 h-max  mb-4 ">
              <div className="  rounded-md p-4 overflow-x-auto shadow-xl bg-white">
                <div className="">
                  <div className="my-2">
                    <h1 className=" text-xl font-bold text-gray-500">
                      Edit Profile
                    </h1>
                  </div>
                  <hr />

                  <div className="mt-8 mb-4 uppercase text-md text-start text-gray-500">
                    <h1>User Information</h1>
                  </div>

                  <form className=" space-y-6">
                    <div className="flex gap-2">
                      <div className="w-1/2 ">
                        <label className=" text-sm font-bold text-gray-700 tracking-wide">
                          Username
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          placeholder="Enter your username"
                          disabled
                          value={username}
                        ></input>
                      </div>

                      <div className="w-1/2">
                        <label className=" text-sm font-bold text-gray-700 tracking-wide">
                          Email
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          placeholder="Enter your email"
                          value={session?.user?.email?.toString()}
                          disabled
                        ></input>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <label className=" text-sm font-bold text-gray-700 tracking-wide">
                          First Name
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          onChange={(e) => setFname(e.target.value)}
                          value={Fname}
                          placeholder="Enter your first name"
                        ></input>
                      </div>

                      <div className="w-1/2">
                        <label className=" text-sm font-bold text-gray-700 tracking-wide">
                          Last Name
                        </label>
                        <input
                          onChange={(e) => setLname(e.target.value)}
                          className=" w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          value={Lname}
                          placeholder="Enter your last name"
                        ></input>
                      </div>
                    </div>
                    <button
                      /* onClick={() => callPutTodo()} */
                      className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" h-max w-1/3  mb-4 hidden md:block">
              <div className=" bg-slate-100  rounded-md">
                <div className=" bg-cover bg-bottom bg-no-repeat bg-[url(/assets/pixel-art.gif)] h-96 w-full  rounded-md  overflow-x-auto shadow-xl bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permant: false,
      },
    };
  }
  return {
    props: { session: await getSession(context) },
  };
}
