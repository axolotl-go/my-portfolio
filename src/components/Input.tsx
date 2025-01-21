interface InputProps {
  type?: "text" | "email";
  id?: string;
  name?: string;
  as?: "primary";
  className?: string;
  rows?: number;
}

const addClass = {
  primary:
    "w-full px-4 py-2 bg-black border border-red-600/30 rounded-lg hover:border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600",
};

export function Input({ as, className, type, id, name }: InputProps) {
  const inputClass =
    addClass[as || "primary"] + (className ? ` ${className}` : "");

  return <input className={inputClass} id={id} name={name} type={type} />;
}

export function Textarea({ as, rows, className, id, name }: InputProps) {
  const inputClass =
    addClass[as || "primary"] + (className ? ` ${className}` : "");

  return <textarea rows={rows} className={inputClass} id={id} name={name} />;
}
