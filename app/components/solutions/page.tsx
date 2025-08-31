import Image from "next/image";
import BigCard from "./bigCard";
import SmallCard from "./smallCard";
import miniAvatar from "@/public/miniavatar.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function Solutions() {
  const solutions = [
    {
      title: (
        <>
          Encarteiramento <br /> Flexível
        </>
      ),
      description:
        "Distribua clientes para os vendedores de forma estratégica, seguindo as regras do seu negócio com flexibilidade.",
      persona: "Gerente de loja",
      quote:
        "Os clientes que são distribuídos para meus vendedores não fazem sentido pro meu negócio.",
    },
    {
      title: "Consulting",
      description:
        "Suporte especializado para pilotar a plataforma Sellbie com eficiência e maximizar seus resultados.",
      persona: "CEO",
      quote:
        "Não tenho uma equipe para tocar a operação do projeto de CRM.",
    },
    {
      title: "Cashback",
      description:
        "Promoções personalizadas que se adaptam ao comportamento do cliente, garantindo mais engajamento e conversão. Defina regras, segmente ofertas e selecione produtos específicos para cada promoção.",
      persona: "Supervisor comercial",
      quote:
        "Quero que meu cashback e outras promoções se integrem ao CRM para mais resultados, sem serem genéricos.",
    },
    {
      title: "Painel 360º",
      description:
        "Crie painéis dinâmicos com os indicadores e filtros que desejar, personalizando o acompanhamento dos resultados mais relevantes para sua empresa.",
      persona: "Diretor Comercial",
      quote:
        "Quero criar relatórios personalizados para acompanhar e reportar os resultados comerciais de forma mais precisa.",
    },
    {
      title: "Editor de HTML",
      description:
        "Uma ferramenta fácil de usar, permitindo que qualquer pessoa crie seus e-mails de forma profissional, sem necessidade de conhecimento técnico.",
      persona: "Gerente de marketing",
      quote:
        "Minha equipe não tem a capacitação necessária para criar os HTMLs de e-mail da marca.",
    },
    {
      title: "API de Retorno",
      description:
        "Uma API que fornece acesso a todos os dados tratados do CDP da Sellbie, garantindo informações organizadas.",
      persona: "Diretor de TI",
      quote:
        "Preciso acessar os dados tratados pela Sellbie de forma dinâmica para integrar e utilizar em meus projetos internos.",
    },
  ];

  return (
    <div className="bg-gray-bg flex items-center justify-center py-16">
      <div className="w-full max-w-[1440px] px-4 md:px-10 text-brand-purple">
        {/* Cabeçalho */}
        <div className="mb-10 lg:absolute">
          <p className="font-normal text-[18px] md:text-[20px]">Descubra mais</p>
          <p className="text-[40px] md:text-[64px] font-black leading-none">
            <span className="text-brand-purple">soluções</span> feitas para
          </p>
          <p className="text-[24px] md:text-[30px]">
            <span className="font-black">resolver as dores</span> de nossos clientes!
          </p>
        </div>

        {/* Layout Desktop (≥lg) */}
        <div className="hidden lg:block pb-[50px]">
          {/* Primeira linha (Encarteiramento Flexível) */}
          <div className="flex justify-end w-full items-center">
            <div className="relative mr-12">
              <BigCard className="w-[295px] relative">
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
              <SmallCard className="w-[375px] h-[100px] absolute right-[280px] bottom-[10px]">
                <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
                <div className="tracking-[0.3px] text-[14px]/5">
                  <p className="font-semibold">Gerente de loja</p>
                  <p className="text-secundary">“Os clientes que são distribuídos para meus vendedores não fazem sentido pro meu negócio.”</p>
                </div>
              </SmallCard>
            </div>
          </div>

          {/* Segunda linha */}
          <div className="mt-16 flex justify-between">
            {/* Consulting */}
            <div className="relative">
              <BigCard className="w-[246px] z-50 relative">
                <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                  Consulting
                </p>
                <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                  Suporte especializado para <span className="text-content-tertiary font-bold">pilotar a plataforma</span> Sellbie com eficiência e maximizar seus resultados.
                </p>
              </BigCard>
              <SmallCard className="w-[323px] h-[81px] left-[235px] top-[-10px] z-10 absolute">
                <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
                <div className="tracking-[0.3px] text-[14px]/5">
                  <p className="font-semibold">CEO</p>
                  <p className="text-secundary">“Não tenho uma equipe para tocar a operação do projeto de CRM.”</p>
                </div>
              </SmallCard>
            </div>

            {/* Cashback */}
            <div className="mt-[100px] relative mr-50">
              <BigCard className="w-[268px] z-50 relative">
                <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                  Cashback
                </p>
                <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                  Promoções personalizadas que se <span className="text-content-tertiary font-bold">adaptam ao comportamento do cliente</span>, garantindo mais engajamento e conversão. Defina regras, segmente ofertas e selecione produtos específicos para cada promoção.
                </p>
              </BigCard>
              <SmallCard className="w-[352px] h-[101px] absolute right-[240px] top-[140px] z-10">
                <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
                <div className="tracking-[0.3px] text-[14px]/5">
                  <p className="font-semibold">Supervisor comercial</p>
                  <p className="text-secundary">“Quero que meu cashback e outras promoções se integrem ao CRM para mais resultados, sem serem genéricos.”</p>
                </div>
              </SmallCard>
            </div>

            {/* Painel 360º */}
            <div className="mt-[50px] relative">
              <BigCard className="w-[250px] z-50 relative">
                <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                  Painel 360º
                </p>
                <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                  Crie <span className="text-content-tertiary font-bold">painéis dinâmicos</span> com os indicadores e filtros que desejar, personalizando o acompanhamento dos resultados mais relevantes para sua empresa de forma intuitiva e eficiente.
                </p>
              </BigCard>
              <SmallCard className="w-[375px] h-[101px] absolute right-[220px] top-[100px] z-10">
                <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
                <div className="tracking-[0.3px] text-[14px]/5 w-[300px]">
                  <p className="font-semibold">Diretor Comercial</p>
                  <p className="text-secundary">“Quero criar relatórios personalizados para acompanhar e reportar os resultados comerciais de forma mais precisa.”</p>
                </div>
              </SmallCard>
            </div>
          </div>

          {/* Terceira linha */}
          <div className="mt-20 relative flex justify-between ml-6 mr-[380px]">
            {/* Editor de HTML */}
            <div>
              <BigCard className="w-[262px] z-50 relative">
                <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                  Editor de HTML
                </p>
                <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                  Uma ferramenta fácil de usar, permitindo que qualquer pessoa <span className="text-content-tertiary font-bold">crie seus e-mails</span> de forma profissional, sem necessidade de conhecimento técnico.
                </p>
              </BigCard>
              <SmallCard className="w-[347px] h-[101px] left-[250px] top-[100px] z-10 absolute mr-[50px]">
                <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
                <div className="tracking-[0.3px] text-[14px]/5">
                  <p className="font-semibold">Gerente de marketing</p>
                  <p className="text-secundary">“Minha equipe não tem a capacitação necessária para criar os HTMLs de e-mail da marca.”</p>
                </div>
              </SmallCard>
            </div>

            {/* API de Retorno */}
            <div>
              <BigCard className="w-[256px] z-50 relative">
                <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px]">
                  API de Retorno
                </p>
                <p className="text-[16px]/6 text-content-primary tracking-[0.5px]">
                  Uma API que fornece acesso a todos os dados tratados do CDP da Sellbie, garantindo <span className="text-content-tertiary font-bold">informações organizadas</span>.
                </p>
              </BigCard>
              <SmallCard className="w-[362px] h-[101px] top-[-20px] right-[-350px] z-10 absolute">
                <Image className="border-1 rounded-full" src={miniAvatar} alt='mini-avatar' width={32} height={32} />
                <div className="tracking-[0.3px] text-[14px]/5">
                  <p className="font-semibold">Diretor de TI</p>
                  <p className="text-secundary">“Preciso acessar os dados tratados pela Sellbie de forma dinâmica para integrar e utilizar em meus projetos internos.”</p>
                </div>
              </SmallCard>
            </div>
          </div>
        </div>

        {/* Carousel (mobile / tablet) */}
        <div className="block lg:hidden">
          <Carousel
            opts={{ align: "center", loop: true }}
            className="relative w-full"
          >
            <CarouselContent>
              {solutions.map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-4 sm:basis-full md:basis-1/2 flex justify-center"
                >
                  <div className="relative flex flex-col items-center max-w-[320px]">
                    <BigCard className="w-full h-auto">
                      <p className="text-[20px]/5 text-content-primary font-black tracking-[0.3px] break-words">
                        {item.title}
                      </p>
                      <p className="text-[16px]/6 text-content-primary tracking-[0.5px] mt-2">
                        {item.description}
                      </p>
                    </BigCard>
                    <SmallCard className="">
                      <Image
                        className="border-1 rounded-full"
                        src={miniAvatar}
                        alt="mini-avatar"
                        width={32}
                        height={32}
                      />
                      <div className="tracking-[0.3px] text-[14px]/5">
                        <p className="font-semibold">{item.persona}</p>
                        <p className="text-secundary">“{item.quote}”</p>
                      </div>
                    </SmallCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Controles — aparecem a partir do md */}
            <div className="hidden md:block">
              <CarouselPrevious />
            </div>
            <div className="hidden md:block">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
