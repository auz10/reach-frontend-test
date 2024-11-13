import { ReactNode } from 'react';

interface ButtonProps {
  id?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative justify-center cursor-pointer inline-flex items-center text-center border bg-green-950 text-xs px-2.5 py-1 h-[26px]"
    >
      {children}
    </button>
  );
}

export default Button;
