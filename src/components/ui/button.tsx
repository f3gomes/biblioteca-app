import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "secondary";
}

export function Button({ children, variant = "primary", ...props }: Props) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    danger: "bg-red-600 hover:bg-red-700 text-white",

    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-800",
  };

  return (
    <button
      className={`
        px-4 py-2 rounded-xl
        transition-all duration-200
        font-medium shadow-sm
        ${variants[variant]}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
