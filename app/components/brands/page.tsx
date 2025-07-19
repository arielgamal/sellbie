"use client"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../ui/carousel"
// import logo from '@/public/logo.png';
import Autoplay from "embla-carousel-autoplay";
import { brands } from "@/utils/brands";


export default function Brands() {
  return (
    <div className="flex flex-col gap-15 mb-10">
      <div className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold text-brand-purple text-center">
        <p>Junte-se a mais de 150 marcas e leve seu CRM para o próximo nível!</p>
      </div>

      <Carousel plugins={[
        Autoplay({
            delay: 0,
            stopOnInteraction: false
        })
      ]} opts={{align: "start", loop: true, duration: 30000}} className="w-full">
        <CarouselContent>
        {brands.map((brand, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8 px-4"
          >
            <div className="flex items-center justify-center py-2">
              <Image
                src={brand.image}
                alt={brand.name}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 12vw"
                priority={index < 8}
              />
            </div>
          </CarouselItem>
        ))}
        </CarouselContent>
      </Carousel>
    </div>    
  )
}