"use client"
import { useRouter } from "next/navigation";

interface props {
    children: string;
    as?: "primary" | "link" | "line" | "fullPrimary";
    className?: string;
    link?: string;
}

const addClass = {
  primary: "bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg",
  fullPrimary: "bg-red-600 hover:bg-red-700 text-white rounded-lg py-1 w-full mt-6 ",
  line: "bg-black text-white border border-red-600 rounded-lg px-8 py-3",
  link: "text-slate-800 font-semibold",
};

export function Button({ children, link, as, className }: props) {
  const navigation = useRouter();

  const handleClick = () => {
    if (link) {
      navigation.push(link);
    }
  };

  const buttonClass =
    addClass[as || "primary"] + (className ? ` ${className}` : "");

  return (
    <button onClick={handleClick} className={buttonClass}>
      {children}
    </button>
  );
}
