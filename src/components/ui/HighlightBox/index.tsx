import React from "react";

interface HighlightBoxProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "stat";
}

export function HighlightBox({ 
  children, 
  variant = "primary" 
}: HighlightBoxProps) {
  const variantStyles = {
    primary: "bg-gray-50 border-l-4 border-[#151617]",
    secondary: "bg-white border border-gray-200 shadow-sm",
    stat: "bg-[#151617] text-white"
  }[variant];
  
  return (
    <div className={`${variantStyles} p-6 mb-8 rounded-sm`}>
      {children}
    </div>
  );
}