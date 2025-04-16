import { BiCalendarStar, BiCalendarWeek } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { RiBrain2Line } from "react-icons/ri";
import { TiArrowRightOutline } from "react-icons/ti";

export const listAccordion = [
  {
    id: 1,
    name: 'CDP',
    icon: <FiDatabase size={18} />,
    steps: [ 
      'Importação de toda base de cliente',
      'Importação de até 5 anos de histórico de venda',
      'Importação dos dados de navegação',
      'Unificação e organização dos dados',
      'Higienização dos dados cadastrais'
    ]
  },
  {
    id: 2,
    name: 'Inteligência de dados',
    icon: <RiBrain2Line size={18} />,
    steps: [
      'Indicadores de cadastro, vendas, produtos e CRM',
      'Segmentação de cliente por RFV',
      'Ferramenta de criação de bases personalizadas',
      'Matriz de migração de segmento',
      'Controle LGPD'
    ]
  },
  { 
  id: 3,
  name: 'Campanhas',
  icon: <BiCalendarStar size={18} />,
  steps: [
      'Quantidade ilimitada de campanhas ativas',
      'Integração com disparadores de e-mail, SMS e WhatsApp',
      'Relatórios de envios',
      'Ferramenta de geração de html',
      'Templates de envio',
      'Textos dinâmicos'
    ]
  },
  {
    id: 4,
    name: 'Jornadas',
    icon: <BiCalendarWeek size={18} />,
    steps: [
      'Quantidade ilimitada de jornadas',
      'Integração com disparadores de e-mail, SMS e WhatsApp',
      'Relatórios das jornadas',
      'Gatilhos de venda, comportamento de CRM e navegação',
      'Textos dinâmicos'
    ]
  },
  {   
    id: 5,
    name: 'Canais',
    icon: <TiArrowRightOutline size={18} />,
    steps: [
      'E-mail',
      'SMS',
      'WhatsApp 1:1',
      'WhatsApp Oficial'
    ]
  }
]