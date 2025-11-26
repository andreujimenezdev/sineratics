import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  variant = "primary", 
  href, 
  children, 
  className = "",
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-block px-8 py-3 text-sm font-medium transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)";
  
  const variants = {
    primary: "bg-black text-white hover:bg-blue-primary hover:text-white hover:border-blue-primary border border-black hover:shadow-lg",
    secondary: "bg-white text-black border border-black hover:bg-blue-primary hover:text-white hover:border-blue-primary",
    outline: "bg-transparent text-black border border-[#e5e5e5] hover:border-blue-primary hover:text-blue-primary hover:bg-blue-primary/5",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

