import Image from "next/image";
import logo from '@/public/logo.png';
import { headerOptions } from "@/utils/header-options";
import Link from "next/link";
import Login from "./login";

export default function Header() {
  return (
    <div className="font-inter bg-white w-full z-[100] flex justify-between items-center px-8 py-4 h-[68px] fixed">
      <Image src={logo} alt="logo" width={143} height={100} />
      <div className="flex gap-2 text-[10px] sm:gap-3 md:gap-9 md:text-[16px] font-medium text-[#140B1D]">
        {
          headerOptions.map((option, index) => (
            <Link className="" key={index} href={option.href}>{option.name}</Link>
          ))
        }
      </div>

      <Login />
    </div>
  )
}