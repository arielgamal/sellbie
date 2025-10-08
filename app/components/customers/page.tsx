import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem
    } from "../ui/carousel"
import { carouselData } from "@/utils/carousel"

export default function Customers() {
  return (
    <div className="bg-brand-purple w-full flex flex-col items-center justify-center pb-[62px] pt-[109px] md:py-[80px] lg:py-[100px]">
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
          {carouselData.map((_, index) => (
          <CarouselItem key={index} className="flex justify-center sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="w-full max-w-[260px] md:max-w-[300px] lg:max-w-[320px] h-[300px] md:h-[320px] lg:h-[332px] p-[30px] bg-white border-1 rounded-[40px]" style={{
              opacity: 0.8
            }}>
              <div className="rounded-full bg-content-disabled w-[94px] h-[94px]" />
              <p className="text-[14px] font-bold text-brand-purple mt-[10px]">{carouselData[index].name}</p>
              <p className="text-[14px] text-brand-purple">CEO</p>
              <p className="text-[14px] text-content-primary mt-[22px]">{carouselData[index].text}</p>
          </div>
          </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
        </div>
        <div className="hidden lg:block">
        </div>
      </Carousel>

      <Link href='#form' className="text-brand-purple flex items-center justify-center w-[357px] font-semibold mx-6 md:mx-0 md:w-[274px] h-[50px] mt-4 md:mt-0 rounded-[40px] bg-white">
        <p className="text-[16px]">Quero transformar meu CRM agora</p>
      </Link>
    </div>
  )
}