import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../ui/carousel"
import logo from '@/public/logo.png';
import Autoplay from "embla-carousel-autoplay";


export default function Brands() {
  return (
    <div className="flex flex-col gap-15 mb-10">
      <div className="flex items-center justify-center text-[24px]/8 font-bold text-brand-purple">
        <p>Junte-se a mais de 150 marcas e leve seu CRM para o próximo nível!</p>
      </div>

      <Carousel plugins={[
        Autoplay({
            delay: 0,
            stopOnInteraction: false
        })
      ]} opts={{align: "start", loop: true, duration: 30000}} className="w-full">
        <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="sm:basis-1/6 md:basis-1/6 lg:basis-1/8 pl-8">
            <div className="p-1">
              <Image src={logo} alt="logo" width={143} height={100} />
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
      </Carousel>
    </div>    
  )
}