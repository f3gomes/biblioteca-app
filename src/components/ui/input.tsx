import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-sm">{label}</label>

      <input
        required
        className="
          border border-slate-300
          rounded-xl
          px-4 py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        {...props}
      />
    </div>
  );
}
