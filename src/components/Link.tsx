import { AnchorHTMLAttributes, FC } from "react";

const addClass = {
  primary: "text-white/70 hover:text-red-600 transition-colors",
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: "primary";
};

export const Link: FC<LinkProps> = ({ children, className, as = "primary", ...props }) => {
  const Styles = `${addClass[as]} ${className ?? ""}`.trim();

  return (
    <a {...props} className={Styles}>
      {children}
    </a>
  );
};
