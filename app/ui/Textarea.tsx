import { useId } from "react";

export interface TextareaProps {
  value: string;
  name: string;
  label: string;
  placeholder: string;
  actions?: React.ReactNode;
}

export const Textarea = ({
  value,
  name,
  label,
  placeholder,
  actions,
}: TextareaProps) => {
  const id = useId();

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-300">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={4}
        className="p-2.5 w-full text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      >
        {value}
      </textarea>
      {actions}
    </div>
  );
};
