export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="px-2 py-2 h-full border border-gray-200 dark:border-slate-700 rounded-md bg-white dark:border-slate-700 dark:bg-slate-800">
      {children}
    </div>
  );
};
