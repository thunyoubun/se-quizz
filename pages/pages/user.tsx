import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { useAuth } from "../../contexts/auth";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
const User = ({ user }: any) => {
  const [avatar, setAvatar] = useState<string | null | undefined | any>(
    "/assets/empty-profile.png"
  );
  const [Fname, setFname] = useState<string | null | undefined | any>("");
  const [Lname, setLname] = useState<string | null | undefined | any>("");
  const [stdId, setStdId] = useState<string | null | undefined | any>("");
  const [organize, setOrganize] = useState<string | null | undefined | any>("");
  const [cmuAccount, setCmuAccount] = useState<string | null | undefined | any>(
    ""
  );

  const [role, setRole] = useState("");
  const { loading, token, isAuthenticated } = useAuth();
  const router = useRouter();

  /* const callGetUser = async () => {
    try {
      const resp = await axios.get(`/api/user`, {
        headers: {
          authorization: `Bearer ${session?.user.accessToken}`,
        },
      });

      if (resp.data.ok) {
        setUser({ ...resp.data.user });
      }
    } catch (err: any) {
      console.log(err.response.data.messasge);
    }
  }; */

  /* onst callPutUser = async () => {
    try {
      const url = `/api/user`;
      const data = {
        name: user.name,
        Lname: user.Lname,
      };
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${session?.user.accessToken}`,
        },
        body: JSON.stringify(data),
      });

      const res = await resp.json();
      if (res.ok) {
        callGetUser();
      }
    } catch (err: any) {
      alert(err);
    }
  }; */

  useEffect(() => {
    /*  callGetUser(); */
    if (isAuthenticated || user) {
      setFname(user?.firstName);
      setLname(user?.lastName);
      setOrganize(user?.organization_name_EN);
      setCmuAccount(user?.cmuAccount);
      setStdId(user?.studentId);

      if (user?.itaccounttype_id === "StdAcc") {
        setRole("Student Account");
      } else if (user?.itaccounttype_id === "AlumAcc") {
        setRole("Teacher Account");
      } else if (user?.itaccounttype_id === "MISEmpAcc") {
        setRole("Staff Account");
      }
    }
  }, []);

  return (
    <div className=" flex leading-default bg-gray-100 dark:bg-gray-600 h-fit min-h-screen   w-full   ">
      <div className=" fixed bg-no-repeat bg-cover  bg-y-50 w-full bg-center h-80 top-0 bg-[url('https://media.tenor.com/An_EgVt-nWoAAAAC/city-lofi.gif')] min-h-75">
        <span className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-40"></span>
      </div>
      <div id="nav-sidebar" className="z-10 hidden md:flex  md:p-6 mb-2">
        <Sidebar />
      </div>

      <div
        className="z-10 container w-full overflow-y-auto relative 
        h-full max-h-screen transition-all duration-200 ease-in-out   "
      >
        <Navbar prePath="Pages" pathName="profile" user={user} />

        <div className="w-full  mt-10 flex flex-col gap-8">
          {/* Card 1 */}
          <div className="w-full  h-max md:px-7 px-3  ">
            <div className="  rounded-md p-4 overflow-x-auto shadow-xl  bg-white dark:bg-gray-800 ">
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
                    <h1 className=" font-bold text-3xl text-gray-800 dark:text-white z-20">
                      {Fname} {Lname}
                    </h1>
                    <div className="flex justify-between gap-10">
                      <div className="flex flex-col">
                        <span className=" text-2xl font-bold text-gray-500 dark:text-gray-300">
                          {role}
                        </span>
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
              <div className="  rounded-md p-4 overflow-x-auto shadow-xl bg-white dark:bg-gray-800 ">
                <div className="">
                  <div className="my-2">
                    <h1 className=" text-xl font-bold text-gray-500 dark:text-white">
                      User Profile
                    </h1>
                  </div>
                  <hr />

                  <div className="mt-8 mb-4 uppercase text-md text-start text-gray-500 dark:text-white">
                    <h1>User Information</h1>
                  </div>

                  {role === "Student Account" ? (
                    <form className=" space-y-6">
                      <div className="flex  gap-2">
                        <div className="w-1/2 ">
                          <label className=" text-sm font-bold text-gray-700 dark:text-white tracking-wide">
                            Student ID
                          </label>
                          <input
                            className=" w-full text-base px-4 dark:text-white py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            type="text"
                            placeholder="Enter your student id"
                            disabled
                            value={stdId}
                          ></input>
                        </div>

                        <div className="w-1/2">
                          <label className=" text-sm font-bold text-gray-700 dark:text-white tracking-wide">
                            Email
                          </label>
                          <input
                            className=" w-full text-base px-4 py-2 border dark:text-white border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            type="text"
                            placeholder="Enter your email"
                            defaultValue={cmuAccount}
                            disabled
                          ></input>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-full">
                          <label className=" text-sm font-bold text-gray-700 dark:text-white tracking-wide">
                            Faculty
                          </label>
                          <input
                            className=" w-full text-base px-4 py-2 border dark:text-white border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            type="text"
                            value={organize}
                            /* onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          } */
                            placeholder="Enter your first name"
                            disabled
                          ></input>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-1/2">
                          <label className=" text-sm font-bold text-gray-700 dark:text-white tracking-wide">
                            First Name
                          </label>
                          <input
                            className=" w-full text-base px-4 py-2 border dark:text-white border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            type="text"
                            value={Fname}
                            disabled
                            /* onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          } */
                            placeholder="Enter your first name"
                          ></input>
                        </div>

                        <div className="w-1/2">
                          <label className=" text-sm font-bold  text-gray-700 dark:text-white tracking-wide">
                            Last Name
                          </label>
                          <input
                            type="text"
                            value={Lname}
                            disabled
                            /* onChange={(e) =>
                            setUser({ ...user, Lname: e.target.value })
                          } */
                            className=" w-full text-base px-4 py-2 border dark:text-white border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            placeholder="Enter your last name"
                          ></input>
                        </div>
                      </div>

                      <button
                        /*  onClick={() => callPutUser()} */
                        className="w-full hidden  justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                      >
                        SUBMIT
                      </button>
                    </form>
                  ) : (
                    <form className=" space-y-6">
                      <div className="flex  gap-2">
                        <div className="w-1/2">
                          <label className=" text-sm font-bold text-gray-700 tracking-wide">
                            Email
                          </label>
                          <input
                            className=" w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            type="text"
                            placeholder="Enter your email"
                            defaultValue={cmuAccount}
                            disabled
                          ></input>
                        </div>
                        <div className="w-1/2">
                          <label className=" text-sm font-bold text-gray-700 tracking-wide">
                            Role
                          </label>
                          <input
                            className=" w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            type="text"
                            placeholder="Enter your email"
                            defaultValue={role}
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
                            value={Fname}
                            disabled
                            /* onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          } */
                            placeholder="Enter your first name"
                          ></input>
                        </div>

                        <div className="w-1/2">
                          <label className=" text-sm font-bold text-gray-700 tracking-wide">
                            Last Name
                          </label>
                          <input
                            type="text"
                            value={Lname}
                            disabled
                            /* onChange={(e) =>
                            setUser({ ...user, Lname: e.target.value })
                          } */
                            className=" w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            placeholder="Enter your last name"
                          ></input>
                        </div>
                      </div>

                      <button
                        /*  onClick={() => callPutUser()} */
                        className="w-full opacity-0 flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                      >
                        SUBMIT
                      </button>
                    </form>
                  )}
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
        <Footer />
      </div>
    </div>
  );
};

export default User;

export const getServerSideProps = async ({ req, res }: any) => {
  const token = getCookie("cmu-oauth-example-token", { req, res });

  if (token) {
    const res = await fetch(`${process.env.NEXTAUTH_URL}api/user`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    const user = data.user;

    return {
      props: {
        token: token,
        user: user,
      },
    };
  } else {
    return {
      redirect: {
        destination: `${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`,
        permant: false,
      },
    };
  }
};
