import Image from "next/image";
import logo from '@/public/logo.png';
import { headerOptions } from "@/utils/header-options";
import Link from "next/link";
import Login from "./login";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <div className="font-inter bg-white w-full z-[100] flex justify-between items-center py-6 md:px-[118px] md:py-4 px-[48px] h-[68px] fixed">
      <Image src={logo} alt="logo" width={143} height={100} />
      <div className="hidden md:flex gap-2 sm:gap-3 md:gap-9 text-[10px] md:text-[12px] lg:text-[16px] font-medium text-[#140B1D]">
        {
          headerOptions.map((option, index) => (
            <Link className="" key={index} href={option.href}>{option.name}</Link>
          ))
        }
      </div>
      <div className="flex items-center gap-3">
        <AiOutlineMenu className="flex md:hidden" size={24} />
        <Login />
      </div>
    </div>
  )
}