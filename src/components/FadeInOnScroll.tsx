// components/FadeInOnScroll.tsx
import { useInView } from "react-intersection-observer";
import React from "react";

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
