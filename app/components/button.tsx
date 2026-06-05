
export const Button = ({ children, className = "", onClick }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center justify-center rounded-full border-2 border-purple-300 px-5 py-2 text-sm text-purple-300 transition-all duration-300 hover:bg-purple-300/10 sm:px-8 sm:text-base ${className}`}
    >
      {children}
    </button>
  );
};
