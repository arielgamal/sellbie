import { JSX } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import AbsoluteCircle from "./absoluteCircle";
import { listAccordion } from "@/utils/accordion-steps";
import { BiCheck } from "react-icons/bi";

interface AccordionProps {
    id: number,
    name: string,
    icon?: JSX.Element,
    steps?: string[]
}

export default function Platform() {
  return (
    <div className="w-full flex items-center justify-center px-[16px]">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 mt-[75px] px-4 xl:px-0">
        <div id='acordeon-div' className="w-full">
          <div className="mt-[25px] w-full max-w-[417px] mx-auto xl:ml-[118px] px-4 xl:px-0">
              <div className="pt-[35px] flex flex-col gap-3 text-center md:text-left">
                  <p className="text-brand-purple text-[18px] font-light">O que está por trás e torna tudo isso possível?</p>
                  <p className="text-brand-purple text-[30px]/8 font-normal">Uma plataforma de CRM consolidada, projetada para <span className="text-orange-primary">impulsionar o crescimento e </span><span className="text-orange-primary text-[38px] font-black">transformar negócios!</span></p>
              </div>
          </div>
          <div className="w-full max-w-[577px] h-auto mx-auto xl:ml-[118px] mt-[88px] px-4 xl:px-0">
            <p className="text-brand-purple text-[14px]/8 font-light">Saiba mais:</p>
            <Accordion type="single" collapsible className="border-1 border-solid border-[#E5E5E5] rounded-[20px]">
              {
                listAccordion.map((element: AccordionProps) => (
                  <div key={element.id}>
                    <AccordionItem value={element.name} className={`${element.name === "Canais" && "border-none"}`}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-5 mx-5">
                          <div className="text-content-disabled">{element.icon}</div>
                          <p className="text-brand-purple text-[16px]">{element.name}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className={`bg-gray-bg px-5 py-4 ${element.name === "Canais" && "rounded-b-[20px]"}`}>
                        {element.steps?.map((element, index: number) => (
                            <div key={index} className="flex items-center gap-5">
                                <BiCheck className="text-content-tertiary"/>
                                <p className="text-brand-purple text-[12px] p-1">{element}</p>
                            </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))
              }
            </Accordion>
          </div>
        </div>
        <div id='circle-div' className="hidden xl:flex xl:justify-center">
          <AbsoluteCircle />
        </div>
      </div>
    </div>
  )
}