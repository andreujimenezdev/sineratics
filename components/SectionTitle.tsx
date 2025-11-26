"use client";

import { useEffect, useRef, useState } from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionTitle({ 
  children, 
  className = "", 
  align = "left" 
}: SectionTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  }[align];

  const justifyClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  }[align];

  return (
    <div className={`flex ${justifyClass}`}>
      <h2
        ref={ref}
        className={`section-title ${isVisible ? 'blue-line-visible' : ''} ${alignClass} ${className}`}
      >
        {children}
      </h2>
    </div>
  );
}




