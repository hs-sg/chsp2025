import React from "react";
// import { cn } from "@/lib/utils"; // 선택: className 병합 유틸 (없으면 생략 가능)

interface BadgeProps {
  text: string;
  className?: string; // 사용자 커스텀 스타일을 위한 선택적 className
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return (
    <span
      className={`${className}`}>
      #{text}
    </span>
  );
};

export default Badge;