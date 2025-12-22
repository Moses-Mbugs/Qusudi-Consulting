import React from 'react';
import { ArrowRight } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  href?: string;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
    secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500 shadow-sm hover:shadow-md',
    outline: 'bg-white text-gray-900 border border-gray-200 hover:border-blue-600 hover:text-blue-600 focus:ring-gray-200'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return <a href={href} className={classes}>
        {children}
        {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </a>;
  }
  return <button className={classes} {...props}>
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>;
}