import Image from "next/image";
import circle from "@/public/circle.webp";
import teste from "@/public/teste.png";
import OrangeButton from "./orangeButton";

const items = [
  // esquerda meio
  { name: "Jornadas", top: "36%", left: "4%" },
  // topo direita
  { name: "Campanhas", top: "13%", left: "55%" },
  // miolo direita
  { name: "Inteligência de dados", top: "40%", left: "52%" },
  // miolo mais interno
  { name: "CDP", top: "54%", left: "32%" },
  // baixo esquerda
  { name: "Canais", top: "75%", left: "8%" },
];

export default function AbsoluteCircle() {
  return (
    <div className="relative w-full max-w-[660px] 2xl:max-w-[760px]">
      <Image
        src={circle}
        alt="circle"
        className="hidden 2xl:flex opacity-[0.3] w-full max-w-[760px] h-[760px]"
      />
      <Image
        src={teste}
        alt="circle"
        className="2xl:hidden opacity-[0.3] w-full max-w-[660px] h-[760px]"
      />
      {items.map((item, index) => (
        <div
          key={index}
          style={{ top: item.top, left: item.left }}
          className="absolute"
        >
          <OrangeButton text={item.name} />
        </div>
      ))}
    </div>
  );
}