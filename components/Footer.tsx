import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contactus"
      className="bg-[#fafafa] py-10  px-6 md:px-0  border-t"
    >
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Image
            src={"/logo.png"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <div className="flex flex-row items-center">
          <p className="text-left  text-xl  text-gray-500 border-r-2 border-gray-600 pr-2 mr-2">
            contact@ambicube.com
          </p>
          <div>
            <Link href={"https://www.linkedin.com/company/ambicube/"} target="_blank">
            <FaLinkedin className="text-3xl " />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2024 Ambicube. All Rights Reserved.
        {/* <Link href="/" className="text-blue-500">
          Privacy Policy
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
