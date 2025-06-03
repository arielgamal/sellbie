import { LuUsers } from "react-icons/lu"
import { RiShoppingBagLine } from "react-icons/ri"
import { TbCalendarPlus } from "react-icons/tb"
import { AiOutlinePieChart } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";

const list = [
    {
        id: 1,
        text: "Criação de campanhas",
        icons: <TbCalendarPlus size={18} className="text-secundary" />
    },
    {
        id: 2,
        text: "Geração de bases",
        icons: <LuUsers size={18} className="text-secundary" />
    },
    {
        id: 3,
        text: "Propensão de compras",
        icons: <RiShoppingBagLine size={18} className="text-secundary" />
    },
    {
        id: 4,
        text: "Indicadores de CRM",
        icons:  <AiOutlinePieChart size={18} className="text-secundary" />
    },
    {
        id: 5,
        text: "Performance de venda",
        icons: <GrMoney size={18} />
    }
]

export default function IaButtons() {

return (
    <div className='flex mt-[20px] gap-[10px]'>
      {
        list.map((element) => (
          <div key={element.id} className="bg-white text-[#140B1D] text-[11px] p-[20px] flex items-center gap-[10px] justify-center h-[34px] rounded-[40px]">
            <div className="text-secondary">
                {element.icons}
            </div>
            <p>{element.text}</p>
          </div>
        ))
      }
    </div>
  )
}