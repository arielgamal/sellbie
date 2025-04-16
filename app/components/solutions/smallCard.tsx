export default function SmallCard(props: { children: React.ReactNode; className?: string; }) {
  return (
    <div style={{ zIndex: 10 }} className={`flex items-center gap-[10px] border-1 px-[20px] py-[10px] border-border-primary bg-card-bg rounded-[20px] ${props.className || ""}`}>
      {props.children}
    </div>
  )
}