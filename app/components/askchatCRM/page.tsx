import star from '@/public/star.png';
import Image from 'next/image';
import Tag from './tag';
import FakeInput from './fakeInput';
import Link from 'next/link';
import IaButtons from './iaButtons';

export default function AskchatCRM() {
  return (
    <div className="h-[825px] px-6 gradient-bg w-full animate-move-gradient flex flex-col items-center text-white">
      <Tag />
      <div className='mt-[100px] sm:mt-[140px] flex items-center justify-center relative'>
        <p className='text-[28px] md:text-[58px]'>Pergunte tudo ao ChatCRM</p> 
        <Image className='absolute hidden md:flex md:-right-4 md:-top-3' src={star} alt="logo" width={32} height={41} />
        <Image className='absolute md:hidden -right-3 -top-3' src={star} alt="logo" width={20} height={41} />
      </div>
      <div className='mt-[11px] text-center'>
        <p className='text-[12px] md:text-[14px]'>Eu leio toda a sua base de dados para te responder, analisar, recomendar e criar campanhas hiperpersonalizadas.</p>
      </div>
      <FakeInput />
        <IaButtons />
      <Link href='#form' className="text-white font-semibold flex items-center justify-center w-[357px] h-[46px] mt-[90px] rounded-[40px] bg-brand-purple">
        <p className="font-normal">Solicitar Demo</p>
      </Link>
    </div>
  )
}