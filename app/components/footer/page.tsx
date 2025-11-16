import logo from '@/public/logo.png';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-gray-bg h-[120px] pt-[50px] md:px-[118px] px-[16px]">
      <div className="flex justify-between text-content-primary">
        <div className=''>
          <Image src={logo} alt="logo" width={143} height={100} />
        </div>
        
        <div className='hidden'>
          <div className='grid grid-cols-2 md:grid md:grid-cols-4 gap-[50px]'>
            <div className=''>
              <p className='text-[16px]/6 font-medium tracking-[0.15px] py-4'>Produtos</p>
              <div className='text-[12px]/4 tracking-[0.4px] flex flex-col gap-2'>
              <p>ChatCRM</p>
              <p>Agentes de IA</p>
              <p>CDP</p>
              <p>Campanhas</p>
              </div>
            </div>
            <div className=''>
              <p className='text-[16px]/6 font-medium tracking-[0.15px] py-4'>Soluções</p>
              <div className='text-[12px]/4 tracking-[0.4px] flex flex-col gap-2'>
                <p>Catálogo de Propensão</p>
                <p>Painel 360º</p>
                <p>Cashback</p>
                <p>Promoções</p>
                <p>Encarteiramento flexível</p>
                <p>HTMLs dinâmicos</p>
                <p>Editor de html</p>
                <p>Consulting</p>
                <p>APIs de retorno</p>
              </div>
            </div>
            <div className=''>
              <p className='text-[16px]/6 font-medium tracking-[0.15px] py-4'>Mercados</p>
              <div className='text-[12px]/4 tracking-[0.4px] flex flex-col gap-2'>
                <p>Catálogo de Propensão</p>
                <p>Painel 360º</p>
                <p>Cashback</p>
                <p>Promoções</p>
                <p>Encarteiramento flexível</p>
                <p>HTMLs dinâmicos</p>
                <p>Editor de html</p>
                <p>Consulting</p>
                <p>APIs de retorno</p>
              </div>
            </div>
            <div className=''>
              <p className='text-[16px]/6 font-medium tracking-[0.15px] py-4'>Por que a Sellbie</p>
              <div className='text-[12px]/4 tracking-[0.4px] flex flex-col gap-2'>
                <p>ChatCRM</p>
                <p>Agentes de IA</p>
                <p>CDP</p>
                <p>Campanhas</p>
                <p>Integrações</p>
              </div>
            </div>
          </div>
          
          <div className='w-[1px] mt-[20px] h-[220px] bg-[#D9D5DD]' />
        </div>
        <div>
          <div className='flex gap-[7px] justify-center'>
            <Link target='_blank' href={'https://www.linkedin.com/company/sellbiecrm/'} className='flex items-center justify-center w-[54px] h-[54px] bg-white rounded-lg'>
              <FaLinkedin size={24} />
            </Link>
            <Link target='_blank' href={'https://www.instagram.com/sellbiecrm'} className='flex items-center justify-center w-[54px] h-[54px] bg-white rounded-lg'>
              <RiInstagramFill size={24} />
            </Link>
            {/* <Link target='_blank' href={'comercial@sellbie.com.br'} className='flex items-center justify-center w-[54px] h-[54px] bg-white rounded-lg'>
              <MdEmail size={24} />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}