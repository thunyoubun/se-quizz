import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../contexts/auth";
import { useTheme } from "../../contexts/theme";

export declare type props = {
  prePath: string;
  pathName: string;
  user: any;
};

const Navbar = ({ prePath, pathName, user }: props) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSideBar, setSideBar] = useState(false);
  /* const { data: session, status } = useSession(); */
  const [isDarkMode, setDarkMode] = useState(false);
  const [avatar, setAvatar] = useState<string | null | undefined | any>("");
  const { loading, token, isAuthenticated, setUser } = useAuth();
  const [auth, setAuth] = useState(null);

  const { theme, setTheme } = useTheme();

  const [color, setColor] = useState("");
  const [switchColor, setSwitchColor] = useState("");

  useEffect(() => {
    /* callGetUser(); */
    setAuth(user.firstName);
    if (isAuthenticated) {
      setAuth(user.firstName);
    }
    setAvatar("/assets/empty-profile.png");
  }, []);

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      document.getElementById("nav-sidebar")?.classList.add("nav-expand");

      setSideBar(true);
    } else {
      setBurgerClass("burger-bar unclicked");
      document.getElementById("nav-sidebar")?.classList.remove("nav-expand");
      setSideBar(false);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const navSign = () => {
    if (isAuthenticated || user) {
      return <p>{auth}</p>;
    }
  };

  function toggleTheme() {
    setDarkMode(!isDarkMode);
    /*     console.log("isDarkMode : ", isDarkMode); */
    switchTheme();
  }

  function loadTheme() {
    //your code here
    const dataStr = localStorage.getItem("theme");
    if (dataStr) {
      const data = dataStr;
      /*     console.log(typeof data); */

      setTheme(data);

      if (data == "true") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
        setColor("bg-gray-700 translate-x-full");
        setSwitchColor("bg-gray-600");
        /*         console.log("theme : dark");
        console.log("Local : ", data);
        console.log("localDark : ", isDarkMode); */
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
        setColor("bg-yellow-500 sm:-translate-x-2 -translate-x-1");
        setSwitchColor("bg-yellow-400");
        /*         console.log("theme : light");
        console.log("Local : ", theme);
        console.log("localDark : ", isDarkMode); */
      }
    }
  }
  function changeIcon() {
    if (isDarkMode) {
      return darkIcon;
    } else {
      return lightIcon;
    }
  }
  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  function switchTheme() {
    if (!isDarkMode) {
      localStorage.setItem("theme", JSON.stringify(true));
      document.documentElement.classList.add("dark");
      setColor("bg-gray-700 translate-x-full");
      setSwitchColor("bg-gray-600");
    } else {
      localStorage.setItem("theme", JSON.stringify(false));
      document.documentElement.classList.remove("dark");
      setColor("bg-yellow-500 sm:-translate-x-2 -translate-x-1");
      setSwitchColor("bg-yellow-400");
    }
  }

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <nav
      className="mt-5 h-max md:right-0 relative flex flex-wrap  z-10 items-center justify-between px-3 md:px-7 py-2  transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
      navbar-main="true"
      navbar-scroll="false"
    >
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="text-sm leading-normal">
              <Link className="text-white opacity-50" href="/">
                {prePath}
              </Link>
            </li>
            <li
              className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
              aria-current="page"
            >
              {pathName}
            </li>
          </ol>
          <h6 className="mb-0 font-bold text-white capitalize">{pathName}</h6>
        </nav>

        <div className="flex items-center mt-2  sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          {/*Serch BAR*/}
          {/* <div className=" items-center md:ml-auto md:pr-4 hidden md:flex">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
              <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                <AiOutlineSearch size={20} />
              </span>
              <input
                type="text"
                className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                placeholder="Search..."
              />
            </div>
          </div> */}
          <ul className="flex gap-4 items-center justify-end pl-0 mb-0 list-none md-max:w-full">
            <li className="flex">
              <button
                className={` relative sm:w-20 w-12 sm:h-10 h-7 rounded-full ${switchColor} flex items-center transition duration-300 focus:outline-none shadow`}
                onClick={toggleTheme}
              >
                <div
                  id="switch-toggle"
                  className={`flex sm:w-10 w-7 sm:h-10 h-7  ${color} rounded-full transition duration-500 transform p-1 text-white`}
                >
                  {changeIcon()}
                </div>
              </button>
            </li>
            <li className="flex  items-center">
              <Link href={"/pages/user"}>
                <button className="  rounded-md flex align-middle justify-center items-center gap-2 px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand">
                  <img
                    src={avatar}
                    alt=""
                    className="bg-contain border-2 hidden md:flex border-white  h-10 w-10 rounded-full z-20"
                  />

                  <FaUser size={20} className="md:hidden flex" />

                  <span className="hidden sm:inline">{navSign()}</span>
                </button>
              </Link>
            </li>
            <li className=" item-center flex md:hidden ">
              <button
                className="burgur-menu w-[4em] flex flex-col items-center py-2 align-middle gap-1 cursor-pointer text-white"
                onClick={updateMenu}
                type="button"
              >
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
