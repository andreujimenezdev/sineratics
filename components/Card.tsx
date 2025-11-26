import { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ 
  title, 
  description, 
  icon, 
  children, 
  className = "",
  hover = true 
}: CardProps) {
  return (
    <div 
      className={`
        p-8 border border-[#e5e5e5] bg-white transition-premium
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
    >
      {icon && <div className="mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
      {description && <p className="text-gray-600 text-sm leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}

