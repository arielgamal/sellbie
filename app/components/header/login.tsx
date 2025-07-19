import Link from "next/link";
import { LuUserRound } from "react-icons/lu";

export default function Login() {
  return (
    <Link href='https://novaplataforma.sellbie.com.br/' target="_blank" className="border-1 border-[#E5E3E8] md:w-[150px] rounded-full flex items-center gap-2">
      <div className="bg-[#F8F7FA] rounded-full border-1 border-[#E5E3E8] w-[40px] h-[40px] flex items-center justify-center">
        <LuUserRound size={20} />
      </div>
      <p className="hidden md:flex text-[10px] md:text-[12px] text-[#EA591C]">
        Área do cliente
      </p>
    </Link>
  )
}