import type React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(prop: React.PropsWithChildren<ButtonProps>) {
  const { children, className, ...props } = prop;

  return (
    <button
      type="submit"
      {...props}
      className={twMerge(
        'disabled:bg-blue-300 rounded-lg hover:bg-blue-600 transition-colors bg-blue-500 text-white text-sm font-bold w-full py-1',
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
