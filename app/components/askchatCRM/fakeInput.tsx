"use client"
import { FaArrowUp } from "react-icons/fa";
import { inputTexts } from "@/utils/input-text";
import { useEffect, useState } from "react";

export default function FakeInput() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < inputTexts[index].text.length) {
        timeout = setTimeout(() => {
          setDisplayText(inputTexts[index].text.slice(0, displayText.length + 1));
        }, 50);
      } else {
        setTimeout(() => setIsDeleting(true), 2000); // Pausa antes de apagar
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
            setDisplayText(inputTexts[index].text.slice(0, displayText.length - 1));
        }, 1);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % inputTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);
  return (
    <div className="border-1 w-full max-w-[512px] h-[56px] rounded-xl bg-white border-tertiary flex justify-between p-[16px] my-[40px]">
      <p className="text-secundary">
        {displayText}
      </p>
      <div className="text-white rounded-full bg-primary w-[24px] h-[24px] flex justify-center items-center">
        <FaArrowUp />
      </div>
    </div>
  )
}