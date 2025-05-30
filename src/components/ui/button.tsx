import React from "react";
//import { cn } from "@/lib/utils"; // 유틸 함수 없으면 생략 가능

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none";
    const variants = {
      default: "bg-black text-white hover:bg-gray-800",
      outline: "border border-black text-black hover:bg-gray-100",
    };
    const sizes = {
      default: "h-10 px-4 py-2",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
