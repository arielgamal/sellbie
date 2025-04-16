import Image from "next/image";
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
    <div className="relative w-full max-w-[600px]">
      <Image src={teste} alt='circle' className="opacity-[0.3] w-full max-w-[600px] h-[760px]" />
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