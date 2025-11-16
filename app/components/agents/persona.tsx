import Image from "next/image";
import { JSX } from "react";

type Props = {
  image: string;
  icon: JSX.Element;
  name: string;
  description: JSX.Element;
};

export default function Persona({ image, icon, name, description }: Props) {
  return (
    <div className={`flex items-center md:w-[550px] w-[350px]`}>
      <div
        className={`flex items-center justify-center shrink-0 z-10 shadow-lg rounded-full relative`}
      >
        <Image
          src={image}
          alt={name}
          width={158}
          height={158}
          className="hidden md:block rounded-full object-cover z-100"
        />

        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="block md:hidden rounded-full object-cover z-100"
        />
        {/* Card */}
        <div className="absolute md:left-36 left-14 md:w-[400px] w-[310px] min-h-[56px] border border-border-primary bg-white rounded-[40px] flex items-center px-6 py-3 shadow-sm ">
            {/* Ícone */}
            <div className="hidden sm:flex items-center justify-center bg-content-tertiary text-white w-[49px] h-[32px] rounded-[20px]">
            {icon}
            </div>

            {/* Texto */}
            <div className="ml-3">
            <p className="text-content-tertiary text-[12px] font-semibold leading-none">
                {name}
            </p>
            <div className="text-brand-purple leading-tight">
                {description}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}