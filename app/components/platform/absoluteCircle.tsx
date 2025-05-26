import Image from "next/image";
import circle from '@/public/circle.webp';
import teste from '@/public/teste.png';
import OrangeButton from "./orangeButton";

const array = [
  {name: 'Jornadas', top: '180px', right: '', left: '', bottom: ''},
  {name: 'Campanhas', top: '100px', right: '', left: '290px', bottom: ''}, 
  {name: 'Inteligencia de dados', top: '250px', right: '122px', left: '', bottom: ''}, 
  {name: 'CPD', top: '350px', Righteous: '', left: '210px', bottom: ''},
  {name: 'Canais', top: '', right: '', left: '15px', bottom: '380px'}
]

export default function AbsoluteCircle() {
  return (
    <div className="relative w-full max-w-[660px] 2xl:max-w-[760px]">
      <Image src={circle} alt='circle' className="hidden 2xl:flex opacity-[0.3] w-full max-w-[760px] h-[760px]" />
      <Image src={teste} alt='circle' className="2xl:hidden opacity-[0.3] w-full max-w-[660px] h-[760px]" />
      {
        array.map((e, index) => (
          <div key={index} style={{ top: e.top, left: e.left, right: e.right, bottom: e.bottom }} className={`absolute`}>
            <OrangeButton text={e.name}  />
          </div>
        ))
      }
    </div>
  )
}