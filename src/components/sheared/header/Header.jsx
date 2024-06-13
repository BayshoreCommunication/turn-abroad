"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import logo from "/public/images/logo.png";
import { usePathname } from "next/navigation";

const Header = () => {
  // mobile menu
  const [isOpen, setIsOpen] = useState(false);

  //
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathName = usePathname();
  const menuItems = (
    <>
      <li className="">
        <Link
          href="/"
          className={`menu-link outline-none  ${pathName == "/" && "active"}`}
        >
          Home
        </Link>
      </li>
      <li className="">
        <Link
          href="/about"
          className={`menu-link outline-none  ${
            pathName == "/about" && "active"
          }`}
        >
          About
        </Link>
      </li>
      {/* <li className="">
        <Link
          href="/student-packages"
          className={`menu-link outline-none  ${
            pathName == "/student-packages" && "active"
          }`}
        >
          Student Package
        </Link>
      </li> */}
      <li className="">
        <Link
          href="/service"
          className={`menu-link outline-none  ${
            pathName == "/service" && "active"
          }`}
        >
          Service
        </Link>
      </li>
      <li className="">
        <Link
          href="/invest-abroad"
          className={`menu-link outline-none  ${
            pathName == "/invest-abroad" && "active"
          }`}
        >
          Invest Abroad
        </Link>
      </li>
      <li className="">
        <Link
          href="/study-abroad"
          className={`menu-link outline-none  ${
            pathName == "/study-abroad" && "active"
          }`}
        >
          Study Abroad
        </Link>
      </li>
      <li className="">
        <Link
          href="/work-abroad"
          className={`menu-link outline-none  ${
            pathName == "/work-abroad" && "active"
          }`}
        >
          Work Abroad
        </Link>
      </li>
      <li className="display xl:hidden">
        <Link
          href="/contact"
          className={`menu-link outline-none  ${
            pathName == "/contact" && "active"
          }`}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <header className="relative">
      <div className="header-top bg-white py-[15px]">
        <div className="container">
          <div className="flex items-center justify-between gap-2 lg:gap-6 flex-wrap">
            <Link
              href="#"
              className="flex items-center gap-2 text-secondary duration-500 hover:text-primary"
            >
              <FaLocationDot /> turnabroad. 3225, Se Habla Espanol
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-secondary duration-500 hover:text-primary"
            >
              <FaPhone /> +501590915
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="header-bottom  bg-[#F3F9FF] border-t border-b  w-full z-50 sticky top-0"> */}
      <div
        className={`header-bottom  bg-[#F3F9FF] border-t border-b top-0  w-full z-50 ${
          isSticky ? "fixed top-0 " : ""
        }`}
      >
        <div className="container">
          <div className="navbar justify-between  px-0 py-3">
            <div className="navbar-start">
              <Link href={"/"}>
                <Image src={logo} alt="logo" width={188} height={51} />
              </Link>
            </div>
            <div className="navbar-center hidden xl:flex">
              <ul className="menu menu-horizontal px-1">{menuItems}</ul>
            </div>
            <div className="hidden xl:flex navbar-end ">
              <Link href={"/contact"} className="btn btn-primary flex">
                Contact Us
              </Link>
            </div>
            <div
              className="dropdown dropdown-end"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-primary xl:hidden"
                // className="btn btn-primary lg:hidden ms-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {isOpen === true ? (
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-1"
                  onClick={() => setIsOpen(false)}
                >
                  {menuItems}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
