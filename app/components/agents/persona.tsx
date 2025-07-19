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
        <div>
            <div>
                <Image className="rounded-full" src={image} alt={name} width={80} height={80} />
            </div>
            <div>

            </div>
        </div>
        // <div className="relative">
        //     <div className="border-2 border-border-primary bg-white rounded-[40px]">
        //         <p>{name}</p>
        //         <p>{description}</p>
        //     </div>
        //     <Image className="absolute -left-10 -top-9 rounded-full h-30" src={image} alt={name} width={80} height={10} />
        //     <div className="w-[436px] h-[56px] border-1 border-border-primary bg-white rounded-[40px] flex items-center">
        //         <div className="hidden sm:flex ml-8 bg-content-tertiary w-[49px] h-[32px] items-center justify-center rounded-[20px] text-white">
        //             {icon}
        //         </div>
        //         <div className="ml-2">
        //             <p className="text-content-tertiary text-[12px] font-semibold">{name}</p>
                    
        //             <h1 className="text-brand-purple">{description}</h1>
        //         </div>
        //     </div>
        // </div>
    )
}