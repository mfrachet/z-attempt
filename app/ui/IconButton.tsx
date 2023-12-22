import { HTMLAttributes } from "react";

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  type?: "submit" | "button";
  icon: React.ReactNode;
}

export const IconButton = ({
  label,
  type = "button",
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      {...props}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
};
