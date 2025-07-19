"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay";

import { LuUsers } from "react-icons/lu"
import { RiShoppingBagLine } from "react-icons/ri"
import { TbCalendarPlus } from "react-icons/tb"
import { AiOutlinePieChart } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";

const list = [
    {
      id: 1,
      text: "Criação de campanhas",
      icons: <TbCalendarPlus size={18} className="text-secundary" />
    },
    {
      id: 2,
      text: "Geração de bases",
      icons: <LuUsers size={18} className="text-secundary" />
    },
    {
      id: 3,
      text: "Propensão de compras",
      icons: <RiShoppingBagLine size={18} className="text-secundary" />
    },
    {
      id: 4,
      text: "Indicadores de CRM",
      icons:  <AiOutlinePieChart size={18} className="text-secundary" />
    },
    {
      id: 5,
      text: "Performance de venda",
      icons: <GrMoney size={18} className="text-secundary" />
    }
]

export default function IaButtons() {

return (
  <div className="overflow-hidden w-full">
    <div className='hidden lg:flex lg:items-center lg:justify-center gap-[20px]'>
      {
        list.map((element) => (
          <div key={element.id} className="min-w-fit bg-white text-[#140B1D] text-[11px] p-[20px] gap-[10px] h-[34px] rounded-[40px] flex items-center justify-center">
            <div className="text-secondary">
                {element.icons}
            </div>
          <p className="whitespace-nowrap">{element.text}</p>
          </div>
        ))
      }
    </div>
    <div className="lg:hidden">
      <Carousel plugins={[
        Autoplay({
            delay: 0,
            stopOnInteraction: false
          })
        ]} opts={{align: "start", loop: true, duration: 30000}} className="w-full">
        <CarouselContent>
        {
          list.map((element) => (
            <CarouselItem key={element.id} className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <div className="min-w-fit bg-white text-[#140B1D] p-[20px] gap-[10px] h-[34px] rounded-[40px] flex justify-center items-center">
                {element.icons}
                <p className="whitespace-nowrap text-[10px] sm:text-[11px]">{element.text}</p>
              </div>
            </CarouselItem>
          ))
        }
        </CarouselContent>
      </Carousel>
    </div>
  </div>

  )
}