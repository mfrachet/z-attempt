import { forwardRef, useId } from "react";

export interface TextareaProps {
  name: string;
  label: string;
  placeholder: string;
  actions?: React.ReactNode;
}

export const Textarea = forwardRef(
  ({ name, label, placeholder, actions }: TextareaProps, ref) => {
    const id = useId();

    let textareaClassname =
      "border border-gray-300 p-2.5 w-full text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    textareaClassname += actions ? " rounded-t-lg" : " rounded-lg";

    return (
      <div>
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          name={name}
          rows={2}
          className={textareaClassname}
          placeholder={placeholder}
        ></textarea>
        {actions}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
