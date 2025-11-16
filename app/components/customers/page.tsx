import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem
  } from "../ui/carousel"
import { carouselData } from "@/utils/carousel"
import Image from "next/image"

export default function Customers() {
  return (
    <div className="bg-brand-purple w-full flex flex-col items-center justify-center pb-[62px] pt-[109px] md:py-[80px] lg:py-[100px] px-[16px]">
      <p className="text-white text-[32px] md:text-[36px] lg:text-[40px] font-extrabold text-center">O que nossos clientes estão dizendo?</p>
      <p className="text-white text-[20px] md:text-[22px] lg:text-[24px] font-light text-center">Veja como a Sellbie tem impulsionado resultados reais e transformado negócios!</p>
    
      <Carousel
        opts={{
            align: "center",
            loop: true,
        }}
        className="w-full max-w-[1000px] md:max-w-[1200px] lg:max-w-[1440px] my-10"
      >
        <CarouselContent>
          {carouselData.map((element, index) => (
            <CarouselItem key={index} className="flex justify-center sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
              <div className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[380px] h-[450px] md:h-[380px] lg:h-[410px] p-[30px] bg-white border-1 rounded-[40px]" style={{
                opacity: 0.8
              }}>
                <Image
                  src={element.image}
                  alt={element.name}
                  className="rounded-full bg-content-disabled w-[90px] h-[94px]" 
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 12vw"
                  priority={index < 8}
                />
                <p className="text-[14px] font-bold text-brand-purple mt-[10px]">{element.name}</p>
                <p className="text-[14px] text-content-primary mt-[22px]">{element.text}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="block sm:block md:block lg:block" />
        <CarouselNext className="block sm:block md:block lg:block" /> */}
      </Carousel>

      <Link href='#form' className="text-brand-purple flex items-center justify-center w-[357px] font-semibold mx-6 md:mx-0 md:w-[320px] px-[32px] h-[44px] mt-4 md:mt-0 rounded-[40px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        <p className="text-[16px]">Quero transformar meu CRM agora</p>
      </Link>
    </div>
  )
}