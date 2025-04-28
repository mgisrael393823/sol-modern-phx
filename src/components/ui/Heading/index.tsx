import React from "react";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["900"] });

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = 1, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = "text-[#151617] leading-tight";
  const sizeStyles = {
    1: "text-4xl md:text-5xl mb-8",
    2: "text-3xl md:text-4xl mb-6",
    3: "text-2xl md:text-3xl mb-4",
    4: "text-xl md:text-2xl mb-3",
    5: "text-lg md:text-xl mb-2",
    6: "text-base md:text-lg mb-2",
  }[level];
  
  return (
    <Tag className={`${headingFont.className} ${baseStyles} ${sizeStyles} ${className}`}>
      {children}
    </Tag>
  );
}