import type { ReactNode } from "react";

interface Props {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ open, title, children, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0
        bg-black/40
        flex items-center justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          p-6
          w-full
          max-w-2xl
        "
      >
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>

          <button onClick={onClose}>✕</button>
        </div>

        {children}
      </div>
    </div>
  );
}
