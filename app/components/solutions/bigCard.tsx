export default function BigCard(props: { children: React.ReactNode; className?: string; }) {
  return (
    <div style={{ zIndex: 50 }} className={`flex flex-col gap-[10px] p-5 border-1 rounded-[20px] bg-white border-border-primary shadow-[0px_4px_8px_4px_rgba(0,0,0,0.10)] ${props.className || ""}`}>
      {props.children}
    </div>
  )
}