// components/LoadingScreen.tsx
import React from "react";

interface LoadingScreenProps {
  percent: number;
}

export default function LoadingScreen({ percent }: LoadingScreenProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center text-white text-9xl"
      style={{
        background: "linear-gradient(135deg, #398AF5, #CDEDE6, #D8F999)",
        fontFamily: "'Press Start 2P', cursive",
      }}
    >
      {percent}%
    </div>
  );
}
