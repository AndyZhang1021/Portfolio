
export const Button = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={`rounded-3xl px-8 py-2 border-2 border-purple-300 text-purple-300 ${className}`}>
      {children}
    </button>
  )
}