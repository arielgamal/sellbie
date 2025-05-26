"use client";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import estrela from "@/public/estrela.png";
import Image from "next/image";
import { useEffect } from "react";

// Declare the type for RDStationForms on the window object
declare global {
  interface Window {
    RDStationForms: new (formId: string, trackingId: string) => { createForm: () => void };
  }
}

// const formSchema = z.object({
//   name: z.string().min(1, { message: "Nome é obrigatório" }),
//   fullname: z.string().min(1, { message: "Sobrenome é obrigatório" }),
//   email: z.string().email({ message: "Email inválido" }),
//   phone: z.string().min(1, { message: "Telefone é obrigatório" }),
//   firm: z.string().min(1, { message: "Nome da empresa é obrigatório" }),
//   role: z.string().min(1, { message: "Cargo é obrigatório" }),
//   market: z.string().min(1, { message: "Mercado é obrigatório" }),
//   stores: z.string().min(1, { message: "Número de lojas é obrigatório" }),
//   website: z.string().url({ message: "URL inválida" }),
// })

// type typeForm = z.infer<typeof formSchema>;

export default function Form() {
  // const { register, handleSubmit } = useForm({
  //   resolver: zodResolver(formSchema)
  // })

  // function handleform(data: typeForm) {
  //   console.log(data)
  //   // Aqui você pode adicionar a lógica para enviar os dados do formulário para o seu backend ou serviço de terceiros  
  // }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.onload = () => {
      new window.RDStationForms('novo-site-formulario-2025-889bdcd0e546374e2f21', 'UA-101872100-1').createForm();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id='form' className="gradient-bg h-[850px] flex justify-center">
      <div className="relative w-full max-w-[1440px]">
        <div className="absolute z-10 -top-15 w-[681px] left-[50px] bg-white rounded-[20px] py-[50px] px-[80px] ml-[134px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center">
          <p className="text-brand-purple text-[34px]/5 font-bold">Solicite uma demo agora!</p>
          <div className="w-[600px]">
            <div className="mt-[40px]" id="novo-site-formulario-2025-889bdcd0e546374e2f21" />
          </div>
          {/* <form onSubmit={handleSubmit(handleform)} className="mt-[40px] flex flex-col items-center gap-[12px]">
            <input className="bg-gray-bg rounded-[8px] w-[466px] h-[49px] p-5" placeholder="Nome completo*" {...register('name')} />
            <input className="bg-gray-bg rounded-[8px] w-[466px] h-[49px] p-5" placeholder="Email corporativo*" {...register('fullname')} />
            <input className="bg-gray-bg rounded-[8px] w-[466px] h-[49px] p-5" placeholder="Telefone*" {...register('email')} />
            <div className="flex gap-[12px]">
              <input className="bg-gray-bg rounded-[8px] w-[226px] h-[49px] p-5" placeholder="Empresa*" {...register('phone')} />
              <input className="bg-gray-bg rounded-[8px] w-[226px] h-[49px] p-5" placeholder="Cargo*" {...register('firm')} />
            </div>
            <div className="flex gap-[12px]">
              <input className="bg-gray-bg rounded-[8px] w-[226px] h-[49px] p-5" placeholder="Mercado*" {...register('role')} />
              <input className="bg-gray-bg rounded-[8px] w-[226px] h-[49px] p-5" placeholder="Nº de lojas físicas*" {...register('market')} />
            </div>
            <input className="bg-gray-bg rounded-[8px] w-[466px] h-[49px] p-5" placeholder="Site*" {...register('stores')} />

            <button type="submit" className="mt-[30px] flex items-center justify-center text-white w-[125px] h-[50px] rounded-[40px] bg-brand-purple">
              <p className="font-normal">Solicitar</p>
            </button>
          </form> */}
        </div>
        <div className="absolute left-[750px] mt-[140px]">
          <div className="relative w-[457px]">
            <Image className="top-[130px]" src={estrela} width={457} alt='estrela' />

            <div className="absolute -top-[60px] left-[340px] w-[303px] flex flex-col justify-center gap-[10px] rounded-[40px] p-10 bg-div-bg">
              <p className="text-white text-[16px]/6 tracking-[0.15] font-medium">Nosso time de especialistas está pronto para te apresentar a Sellbie e encontrar a melhor solução para o seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}