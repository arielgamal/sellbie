import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    } from "../ui/carousel"

export default function Customers() {
  return (
    <div className="bg-brand-purple w-full flex flex-col items-center justify-center pb-[62px] pt-[109px]">
      <p className="text-white text-[32px] font-extrabold">O que nossos clientes estão dizendo?</p>
      <p className="text-white text-[20px] font-light">Veja como a Sellbie tem impulsionado resultados reais e transformado negócios!</p>
    
      <Carousel
        opts={{
            align: "center",
            loop: true,
        }}
        className="w-full max-w-[1000px] my-10"
        >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="w-[320px] h-[332px] p-[30px] bg-white border-1 rounded-[40px]" style={{
              opacity: 0.4 + Math.random() * (0.4)
            }}>
              <div className="rounded-full bg-content-disabled w-[94px] h-[94px]" />
              <p className="text-[14px] font-bold text-brand-purple mt-[10px]">Roger Sabbag</p>
              <p className="text-[14px] text-brand-purple">CEO Via Mia</p>
              <p className="text-[14px] text-content-primary mt-[22px]">“Com o ChatCRM, identificamos rapidamente clientes prontos para comprar e os produtos mais demandados. Isso otimizou nossas campanhas e <span className="text-content-tertiary font-bold">aumentou nossas vendas em 35%!”</span></p>
          </div>
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Link href='#form' className="text-brand-purple flex items-center justify-center w-[274px] h-[50px] rounded-[40px] bg-white">
        <p className="text-[18px]">Transforme seu CRM agora</p>
      </Link>
    </div>
  )
}