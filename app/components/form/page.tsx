"use client";
import estrela from "@/public/estrela.png";
import Image from "next/image";
import { useEffect } from "react";

declare global {
  interface Window {
    RDStationForms: new (formId: string, trackingId: string) => { createForm: () => void };
  }
}

export default function Form() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.onload = () => {
      new window.RDStationForms('novo-site-formulario-2025-889bdcd0e546374e2f21', 'UA-101872100-1').createForm();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id='form' className="gradient-bg w-full flex justify-center py-10 px-4 md:py-20">
      <div className="w-full max-w-[1440px] grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        <div className="w-full flex justify-center xl:justify-start lg:ml-40 relative z-20">
          <div className="w-full max-w-[681px] bg-white rounded-[20px] py-10 md:py-[50px] px-6 md:px-10 lg:px-[80px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] flex flex-col items-center">
            <p className="text-brand-purple text-[24px]/5 md:text-[30px]/5 lg:text-[34px]/5 font-bold text-center">Solicite uma demo agora!</p>
            <div className="w-full max-w-[600px] mt-10 md:mt-[40px]">
              <div role="main" id="novo-site-formulario-2025-889bdcd0e546374e2f21" />
            </div>
          </div>
        </div>

        <div className="hidden xl:flex justify-center lg:absolute lg:right-60 z-10">
          <div className="relative w-[300px] xl:w-[457px]">
            <Image className="top-[130px]" src={estrela} width={457} alt='estrela' />
            <div className="absolute -top-[40px] 2xl:-top-[60px] right-0 w-[220px] 2xl:w-[303px] flex flex-col justify-center gap-[10px] rounded-[40px] p-6 2xl:p-10 bg-div-bg">
              <p className="text-white text-[14px]/6 2xl:text-[16px]/6 tracking-[0.15] font-medium">
                Nosso time de especialistas está pronto para te apresentar a Sellbie e encontrar a melhor solução para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}