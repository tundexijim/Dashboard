import React from "react";
import { RxDashboard } from "react-icons/rx";
import { MdPayment } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { BiMessageSquareDetail, BiSolidBarChartSquare } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between bg-[#191919] text-white pt-32 pb-10 px-6">
      <div className="flex flex-col gap-8">
        <Link href="/" className="flex gap-4 items-center hover:text-blue-400">
          <RxDashboard />
          <span className="hidden lg:block">Dashboard</span>
        </Link>
        <Link href="/" className="flex gap-4 items-center hover:text-blue-400">
          <MdPayment />
          <span className="hidden lg:block">Payments</span>
        </Link>
        <Link href="/" className="hover:text-blue-400 flex gap-4 items-center">
          <IoMdAnalytics />
          <span className="hidden lg:block">Analytics</span>
        </Link>
        <Link href="/" className="flex gap-4 items-center hover:text-blue-400">
          <BiMessageSquareDetail />
          <span className="hidden lg:block">Messages</span>
        </Link>
        <Link href="/" className="hover:text-blue-400 flex gap-4 items-center">
          <BiSolidBarChartSquare />
          <span className="hidden lg:block">All Charts</span>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Link href="/" className="hover:text-blue-400 flex gap-4 items-center">
          <FiSettings />
          <span className="hidden lg:block">Settings</span>
        </Link>
        <Link href="/" className="hover:text-blue-400 flex gap-4 items-center">
          <AiOutlineLogout />
          <span className="hidden lg:block">Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
