import Image from "next/image";
import BigCard from "./bigCard";
import SmallCard from "./smallCard";
import miniAvatar from "@/public/miniavatar.png";

export default function Solutions() {
  return (
    <div className="p-16 bg-gray-bg flex pb-[180px] items-center justify-center">
      <div className="text-brand-purple text-[30px]/10 w-full max-w-[1440px]">
        <div className="flex justify-between w-full items-center">
          <div className="">
            <p className="font-normal">Descubra mais</p>
            <p className=""><span className="text-[64px] font-black">soluções</span> feitas para</p>
            <p><span className="font-black">resolver as dores</span> de nossos clientes!</p>
          </div>
          <div className="relative mr-12">
            <BigCard className="w-[295px] h-[213px] z-50 relative">
              <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                Encarteiramento 
              </p>
              <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                Flexível
              </p>
              <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                Distribua <span className="text-content-tertiary font-bold">clientes para os vendedores</span> de forma estratégica, seguindo as regras do seu negócio com flexibilidade.
              </p>
            </BigCard>
            <SmallCard className="w-[375px] h-[101px] absolute right-[280px] bottom-[10px] z-10">
              <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
              <div className=" tracking-[0.3px] text-[14px]/5">
                <p className="font-semibold">Gerente de loja</p>
                <p className="text-secundary">“Os clientes que são distribuídos para meus vendedores não fazem sentido pro meu negócio.”</p>
              </div>
            </SmallCard>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="relative">
            <BigCard className="w-[246px] h-[170px] z-50 relative">
              <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                Consulting               
              </p>
              <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                Suporte especializado para <span className="text-content-tertiary font-bold">pilotar a plataforma</span> Sellbie com eficiência e maximizar seus resultados.
              </p>
            </BigCard>
            <SmallCard className="w-[323px] h-[81px] left-[220px] top-[-10px] z-10 absolute">
              <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
              <div className=" tracking-[0.3px] text-[14px]/5">
                <p className="font-semibold">CEO</p>
                <p className="text-secundary">“Não tenho uma equipe para tocar a operação do projeto de CRM.”</p>
              </div>
            </SmallCard>
          </div>
          <div className="mt-[100px] relative mr-50">
            <BigCard className="w-[268px] h-[270px] z-50 relative">
            <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
              Cashback               
            </p>
            <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
              Promoções personalizadas que se <span className="text-content-tertiary font-bold">adaptam ao comportamento do cliente</span>, garantindo mais engajamento e conversão. Defina regras, segmente ofertas e selecione produtos específicos para cada promoção.
            </p>
            </BigCard>
            <SmallCard className="w-[352px] h-[101px] absolute right-[240px] top-[140px] z-10">
              <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
              <div className=" tracking-[0.3px] text-[14px]/5">
                <p className="font-semibold">Supervisor comercial</p>
                <p className="text-secundary">“Quero que meu cashback e outras promoções se integrem ao CRM para mais resultados, sem serem genéricos.”</p>
              </div>
            </SmallCard>
          </div>        
          <div className="mt-[50px] relative">
            <BigCard className="w-[250px] h-[242px] z-50 relative">
              <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                Painel 360º               
              </p>
              <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                Crie <span className="text-content-tertiary font-bold">painéis dinâmicos</span> com os indicadores e filtros que desejar, personalizando o acompanhamento dos resultados mais relevantes para sua empresa de forma intuitiva e eficiente.
              </p>
            </BigCard>
            <SmallCard className="w-[375px] h-[101px] absolute right-[220px] top-[100px] z-10">
              <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
              <div className=" tracking-[0.3px] text-[14px]/5 w-[300px]">
                <p className="font-semibold">Diretor Comercial</p>
                <p className="text-secundary">“Quero criar relatórios personalizados para acompanhar e reportar os resultados comerciais de forma mais precisa.”</p>
              </div>
            </SmallCard>
          </div>
        </div>
        <div className="mt-10 relative flex justify-between ml-6 mr-[380px]">
          <div>
            <BigCard className="w-[262px] h-[231px] z-50 relative">
              <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                Editor de HTML               
              </p>
              <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                Uma ferramenta fácil de usar, permitindo que qualquer pessoa <span className="text-content-tertiary font-bold">crie seus e-mails</span> de forma profissional, sem necessidade de conhecimento técnico.
              </p>
            </BigCard>
            <SmallCard className="w-[347px] h-[101px] left-[240px] top-[100px] z-10 absolute mr-[50px]">
              <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
              <div className=" tracking-[0.3px] text-[14px]/5">
                <p className="font-semibold">Gerente de marketing</p>
                <p className="text-secundary">“Minha equipe não tem a capacitação necessária para criar os HTMLs de e-mail da marca.”</p>
              </div>
            </SmallCard>
            </div>
          <div>
            <BigCard className="w-[256px] h-[190px] z-50 relative">
              <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                API de Retorno               
              </p>
              <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                Uma API que fornece acesso a todos os dados tratados do CDP da Sellbie, garantindo <span className="text-content-tertiary font-bold">informações organizadas</span>.
              </p>
            </BigCard>
            <SmallCard className="w-[362px] h-[101px] top-[-20px] right-[-340px] z-10 absolute">
              <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
              <div className=" tracking-[0.3px] text-[14px]/5">
                <p className="font-semibold">Diretor de TI</p>
                <p className="text-secundary">“Preciso acessar os dados tratados pela Sellbie de forma dinâmica para integrar e utilizar em meus projetos internos.”</p>
              </div>
            </SmallCard>
          </div>
        </div>
      </div>
    </div>
  )
}