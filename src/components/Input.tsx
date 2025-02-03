import { InputHTMLAttributes, TextareaHTMLAttributes, FC } from "react";

const addClass = {
  primary:
    "w-full px-4 py-2 bg-black border border-red-600/30 rounded-lg hover:border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600",
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  as?: "primary";
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as?: "primary";
};

export const Input: FC<InputProps> = ({ className, as = "primary", ...props }) => {
  const Styles = `${addClass[as]} ${className ?? ""}`.trim();
  return <input className={Styles} {...props} />;
};

export const Textarea: FC<TextareaProps> = ({ className, as = "primary", ...props }) => {
  const Styles = `${addClass[as]} ${className ?? ""}`.trim();
  return <textarea className={Styles} {...props} />;
};
