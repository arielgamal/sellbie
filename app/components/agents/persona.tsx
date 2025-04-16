import Image from "next/image";
import { JSX } from "react";

type Props = {
    image: string;
    icon: JSX.Element;
    name: string;
    description: JSX.Element;
}

export default function Persona({image, icon, name, description}: Props) {
    return (
        <div className="relative">
            <Image className="absolute -left-21 -top-10" src={image} alt={name} width={120} height={132} />
            <div className="w-[436px] h-[56px] border-1 border-border-primary bg-white rounded-[40px] flex items-center">
                <div className="ml-8 bg-content-tertiary w-[49px] h-[32px] flex items-center justify-center rounded-[20px] text-white">
                    {icon}
                </div>
                <div className="ml-2">
                    <p className="text-content-tertiary text-[12px] font-semibold">{name}</p>
                    
                    <h1 className="text-brand-purple">{description}</h1>
                </div>
            </div>
        </div>
    )
}