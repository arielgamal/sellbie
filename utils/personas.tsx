import { LuArrowLeftRight, LuUsers } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbCalendarPlus } from "react-icons/tb";

export const personas = [
  {
    id: 1,
    image: '/kim.png',
    icon: <LuUsers size={18} />,
    name: 'Agente Kim',
    description: <p className="font-medium text-[14px]">Gera <span className="font-bold">bases inteligentes</span> de clientes</p>
  },
  {
    id: 2,
    image: '/eva.png',
    icon: <RiShoppingBagLine size={18} />,
    name: 'Agente Eva',
    description: <p className="font-medium text-[14px]">Prevê a <span className="font-bold">propensão de compra</span> e venda</p>
  },
  {
    id: 3,
    image: '/edu.png',
    icon: <LuArrowLeftRight size={18} />,
    name: 'Agente Edu',
    description: <p className="font-medium text-[14px]">Recomenda os <span className="font-bold">melhores produtos</span> para cada cliente</p>
  },
  {
    id: 4,
    image: '/lia.png',
    icon: <TbCalendarPlus size={18} />,
    name: 'Agente Lia',
    description: <p className="font-medium text-[14px]">Cria <span className="font-bold">campanhas hiperpersonalizadas</span></p>
  }
]