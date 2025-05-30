import React, { useRef, useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Badge from "./components/ui/badge";
import { Menu } from "lucide-react";
import "@google/model-viewer";

export default function App(): JSX.Element {

// import { Card, CardContent } from "@/components/ui/card";
// import React from "react";

// export default function HsPwsDesktopFrame(): JSX.Element {
  // Navigation items
  const navItems = [
    { title: "about me", id: "about" },
    { title: "projects", id: "projects" },
    { title: "contact me", id: "contact" },
  ];

  // Project data
  const projects = [
    {
      id: "festgo",
      title: "festgo",
      description: "대한민국 전국 축제 정보 사이트",
      tags: ["Java", "Spring", "Oracle", "JavaScript"],
    },
    {
      id: "villigo",
      title: "villigo",
      description: "슈퍼카 & 명품백 대여 플랫폼",
      tags: ["Java", "Spring Boot", "JavaScript", "PostgreSQL", "JPA"],
    },
  ];

  // Contact methods
  const contactMethods = [
    { title: "MAIL", link: "mailto:hasin927@gmail.com" },
    { title: "GitHub", link: "https://github.com/hs-sg" },
  ];

  // 모바일/태블릿 메뉴 펼침 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      {/* 모바일/태블릿 화면 메뉴 표시 영역 */}
      <div className="w-full h-16 md:h-[100px]">
          {/* 햄버거 메뉴 (모바일/태블릿) */}
          <div className="lg:hidden flex justify-end p-4">
            <Menu size={32} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
      </div>

      {/* 모바일 메뉴 펼침 */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 bg-white py-4 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-lg font-semibold text-black hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}

      {/* 헤더 배경 */}
      <div className="w-full h-[450px] md:h-[280px] lg:h-[550px] bg-cover bg-center"
        style={{backgroundImage: "url('/header_background.png')"}}
      >
        <img
          className="hidden lg:block absolute w-[100px] md:w-[140px] lg:w-[260px] lg:top-[350px] lg:left-[250px]"
          alt="Hs logo top"
          src="/hs_logo.png"
        />
          <model-viewer
            className="mx-auto float-none md:float-right md:mr-10 md:w-[500px] lg:w-[1300px] h-[500px] lg:h-[1750px]"
            alt="angel_sculpture"
            src="/angel_sculpture.glb"
            poster=""
            shadow-intensity="1"
            camera-controls touch-action="pan-y"
            auto-rotate>
          </model-viewer>
      </div>
      {/* Navigation Menu */}
      <nav className="hidden lg:flex w-full mt-10 justify-around gap-6 text-blue-600 font-medium">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="max-w-[600px] font-bold text-black 
              text-[18px] lg:text-[80px] text-center 
              tracking-[-1.35px] leading-[54.0px] hover:underline">
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

