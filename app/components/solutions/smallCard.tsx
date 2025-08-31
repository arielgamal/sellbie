export default function SmallCard(props: { children: React.ReactNode; className?: string; }) {
  return (
    <div 
      className={`flex z-[10] items-center gap-[10px] border-1 px-[20px] py-[10px] border-border-primary bg-[#EBE2F4] rounded-[20px] ${props.className || ""}`}
    >
      {props.children}
    </div>
  )
}
