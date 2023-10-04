import React from "react";
import Link from "next/link";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
        <button className="flex items-center gap-2 bg-white rounded-3xl p-2 lg:flex">
          <AiOutlineArrowUp />
          <span className="hidden lg:block">Send a payment</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-400 rounded-3xl p-2 lg:flex">
          <GrAdd />
          <span className="hidden lg:block">Add Money</span>
        </button>
        <button className="flex items-center gap-2 border border-gray-400 rounded-3xl p-2 lg:flex">
          <AiOutlineArrowDown />
          <span className="hidden lg:block">Request</span>
        </button>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <Image
          src="/Avatar.jpeg"
          width={30}
          height={30}
          className=" rounded-[50%]"
          alt=""
        />
        <div className="hidden lg:block">
          <p>Tunde Ijimakinde</p>
          <p>ijimakindetunde@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
