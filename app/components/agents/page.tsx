import { personas } from "@/utils/personas";
import Persona from "./persona";
import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import star from '@/public/star.png';

interface PersonaProps {
  id: number;
  image: string;
  icon: JSX.Element;
  name: string;
  description: JSX.Element;
}

export default function Agents() {
  return (
    <div className="flex flex-col items-center pt-[54px] min-h-[625px] bg-accent-purple">
      <div className="w-full flex items-center text-center flex-col">
        <p className="w-[300px] md:w-full text-[22px] md:text-[26px] text-brand-purple font-light">Adicione ao ChatCRM os <span className="md:text-[48px]">Agentes de IA</span></p>
        <p className="text-[22px] md:text-[26px] text-brand-purple font-bold">e potencialize seus resultados!</p>
      </div>
      <div className="px-4 lg:grid lg:grid-cols-2 grid grid-cols-1 place-items-center gap-x-24 gap-y-16 mt-17">
        {
          personas.map((element: PersonaProps) => (
            <div key={element.id}>
              <Persona 
                image={element.image} 
                icon={element.icon} 
                name={element.name} 
                description={element.description} 
              />
            </div>
          ))
        }
      </div>
      <Link href='#form' className="text-white mt-[91px] mb-[55px] flex items-center justify-center gap-[10px] w-[357px] h-[61px] rounded-[40px] bg-brand-purple">
        <p className="font-normal text-[18px]">Quer saber mais sobre os agentes?</p>
        <Image src={star} alt="logo" width={32} height={41} />
      </Link>
    </div>
  )
}