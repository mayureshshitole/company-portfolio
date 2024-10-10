"use client";
import Image from "next/image";
// import ScrollLink from "next/ScrollLink";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      id="top"
      className="bg-[#FBBF24] py-2 z-50 overflow-hidden fixed w-full inset-x-0 top-0 shadow-lg  mx-auto md:max-w-4xl lg:max-w-6xl rounded-md border "
    >
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0 flex items-center rounded-full border-8 border-white hover:rotate-45 hover:scale-110 transition-all ease-in-out duration-300">
              {/* Your logo or brand */}
              <ScrollLink to="hero" smooth={true}>
                <Image
                  src={"/logo.png"}
                  width={50}
                  height={50}
                  className="w-18 "
                  alt="image"
                />{" "}
              </ScrollLink>
            </div>

            {/* Navigation ScrollLinks */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <ScrollLink
                  to="aboutus"
                  smooth={true}
                  className="text-gray-800  hover:gray-900 hover:scale-125 transition-all ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </ScrollLink>

                <ScrollLink
                  to="servicetab"
                  smooth={true}
                  className="text-gray-800  hover:gray-900 hover:scale-125 transition-all ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </ScrollLink>
                <ScrollLink
                  to="contactus"
                  smooth={true}
                  className="text-gray-800  hover:gray-900 hover:scale-125 transition-all ease-in-out duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </ScrollLink>
              </div>
            </div>
            {/* contact btn */}
            <div className="hidden md:block">
              <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition-all ease-in-out duration-200 text-sm active:scale-105 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                <a href="tel:+4407436359533">Call</a>
              </button>
            </div>
          </div>
          {/* Hamburger menu for mobile */}
          <div className=" flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800  hover:gray-900 focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ScrollLink
              onClick={() => setIsOpen(!isOpen)}
              to="aboutus"
              smooth={true}
              className="text-gray-800 hover:bg-red-700 hover:gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsOpen(!isOpen)}
              to="servicetab"
              smooth={true}
              className="text-gray-800 hover:bg-red-700 hover:gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsOpen(!isOpen)}
              to="contactus"
              smooth={true}
              className="text-gray-800 hover:bg-red-700 hover:gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </ScrollLink>
            {/* contact btn */}
            <div className="w-full bg-white text-center py-2 rounded-md shadow-lg active:scale-105 transition-all ease-in-out duration-200">
              <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                <a href="tel:+4407436359533">Call</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
