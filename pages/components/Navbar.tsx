import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSideBar, setSideBar] = useState(false);

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

  const handleNav = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  /* useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("transparent");
        setTextColor("white");
      } else {
        setColor("#0066ff");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []); */

  return (
    <nav
      className="mt-5 h-max md:right-0 relative flex flex-wrap  z-10 items-center justify-between px-3 md:px-7 py-2  transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
      navbar-main
      navbar-scroll="false"
    >
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="text-sm leading-normal">
              <Link className="text-white opacity-50" href="javascript:;">
                Pages
              </Link>
            </li>
            <li
              className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
              aria-current="page"
            >
              My Quizz
            </li>
          </ol>
          <h6 className="mb-0 font-bold text-white capitalize">My Quizz</h6>
        </nav>

        <div className="flex items-center mt-2  sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
          <div className=" items-center md:ml-auto md:pr-4 hidden md:flex">
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
          </div>
          <ul className="flex justify-end pl-0 mb-0 list-none md-max:w-full">
            <li className="flex  items-center">
              <Link
                href="/login"
                className=" flex gap-2 px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand"
              >
                <FaUser size={20} />
                <span className="hidden sm:inline">Sign In</span>
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
