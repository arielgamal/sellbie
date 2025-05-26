import star from '@/public/star.png';
import Image from 'next/image';
import Tag from './tag';
import FakeInput from './fakeInput';
import Link from 'next/link';
import IaButtons from './iaButtons';

export default function AskchatCRM() {
  return (
    <div className="h-[825px] gradient-bg w-full animate-move-gradient flex flex-col items-center text-white">
      <Tag />
      <div className='mt-[153px] w-[400px] md:w-[760px] flex items-center relative'>
        <p className='text-[30px] md:text-[60px]'>Pergunte tudo ao ChatCRM</p> 
        <Image className='absolute right-0 top-0' src={star} alt="logo" width={32} height={41} />
      </div>
      <div className='mt-[11px]'>
        <p className='text-[14px] md:text-[16px]'>Eu leio toda a sua base de dados para te responder, analisar, recomendar e criar campanhas hiperpersonalizadas.</p>
      </div>
      <FakeInput />
      <IaButtons />
      <Link href='#form' className="text-white flex items-center justify-center w-[173px] h-[50px] mt-[90px] rounded-[40px] bg-brand-purple">
        <p className="font-normal">Solicitar Demo</p>
      </Link>
    </div>
  )
}