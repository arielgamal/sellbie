type Props = {
    text: string;
    classname?: string;
}

export default function OrangeButton({text}:Props) {
    return (
        <div className="relative inline-flex h-[48px] items-center">
            <div className="bg-orange-primary text-[20px] px-4 py-2 rounded-[40px] text-white flex justify-center items-center border-1 border-white">
                {text}
            </div>
            <div className="bg-orange-primary h-[11px] w-[11px] rounded-full border-1 border-white absolute -right-3 top-1/2 -translate-y-1/2"></div>
        </div>
    )
}