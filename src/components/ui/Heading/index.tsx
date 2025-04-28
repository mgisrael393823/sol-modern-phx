import React from "react";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = 1, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = "text-[#333333] leading-tight uppercase tracking-wide";
  const sizeStyles = {
    1: "text-3xl md:text-4xl mb-8",
    2: "text-2xl md:text-3xl mb-6",
    3: "text-xl md:text-2xl mb-4",
    4: "text-lg md:text-xl mb-3",
    5: "text-base md:text-lg mb-2",
    6: "text-sm md:text-base mb-2",
  }[level];
  
  return (
    <Tag className={`${headingFont.className} ${baseStyles} ${sizeStyles} ${className}`}>
      {children}
    </Tag>
  );
}