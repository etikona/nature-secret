import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  //   const toggleNav = () => {
  //     setIsNavOpen(!isNavOpen);
  //   };
  return (
    <div className="navbar px-5 flex justify-between py-2 rounded w-full">
      <div>
        <Link href="/">
          <Image
            src={logo}
            width={50}
            height={30}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <nav className="">
        <div className="md:hidden">
          <Image
            src={isNavOpen ? close : menu}
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-white text-2xl mt-5"
            aria-label="Toggle Menu"
          ></Image>
        </div>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto`}
        >
          <ul className="flex  flex-col md:flex-row md:space-x-4 md:items-center space-x-4 text-white text-xl align-center items-center  ">
            <li className="hover:text-green-500">
              <Link href="/plant">Plant</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href="/community">Community</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href="/contact">About</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href="/contact">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
