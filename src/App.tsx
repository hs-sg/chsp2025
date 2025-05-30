import React, { useRef, useState } from "react";
import { Button } from "./components/ui/button";
import ProjectCard from "./components/ProjectCard";
import FadeInOnScroll from "./components/FadeInOnScroll";
import { Menu, X } from "lucide-react";
import "@google/model-viewer";

export default function App(): JSX.Element {
// export default function HsPwsDesktopFrame(): JSX.Element {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
      imageSrc: "/festgo_card_img.png",
      tags: ["Java", "Spring", "Oracle", "JavaScript"],
    },
    {
      id: "villigo",
      title: "villigo",
      description: "슈퍼카 & 명품백 대여 플랫폼",
      imageSrc: "/villigo_card_img.png",
      tags: ["Java", "Spring Boot", "JavaScript", "PostgreSQL", "JPA"],
    },
  ];

  // Contact methods
  const contactMethods = [
    { title: "MAIL", link: "mailto:hasin927@gmail.com" },
    { title: "GitHub", link: "https://github.com/hs-sg" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      {/* 헤더 배경 */}
      <div className="w-full h-[250px] md:h-[280px] lg:h-[550px] bg-cover bg-center mt-10"
        style={{backgroundImage: "url('/header_background.png')"}}>
        {/* 로고 */}
        <img
          className="hidden lg:block absolute w-[30px] md:w-[70px] lg:w-[110px] lg:top-[150px] lg:left-[240px]"
          alt="Hs logo top"
          src="/hs_logo.png"
        />

        {/* 이름 */}
        <img
          className="block absolute w-auto md:w-[800px] lg:w-[1000px] top-[500px] md:top-[350px] lg:top-[500px] lg:left-[240px]"
          alt="hashin choi"
          src="/name_en.png"
        />

        {/* 3D Model(모델 뷰어) */}
        <model-viewer
          className="mx-auto float-none md:float-right md:mr-20 md:w-[500px] lg:w-[700px] h-[500px] lg:h-[890px]"
          alt="angel sculpture"
          src="/angel_sculpture.glb"
          poster=""
          shadow-intensity="1"
          camera-controls
          interaction-prompt="none"
          disable-zoom
          /*touch-action="pan-y"*/
          auto-rotate>
        </model-viewer>
      </div>

      {/* 모바일/태블릿 메뉴 */}
      <div className="lg:hidden">
        {/* 로고 */}
        <img
          className="fixed top-4 left-4 w-[30px]"
          alt="hs"
          src="/hs_logo.png"
        />

        {/* 햄버거 메뉴 버튼 (모바일 전용) */}
        <div className="fixed top-4 right-4 z-50">
          <Menu size={32} onClick={() => setIsDrawerOpen(true)} className="cursor-pointer" />
        </div>
      </div>

      {/* Drawer 오버레이 */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white z-50 shadow-lg transform transition-transform duration-300
        ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <X size={28} onClick={() => setIsDrawerOpen(false)} className="cursor-pointer" />
        </div>
        <nav className="flex flex-col items-start px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-lg font-medium text-gray-800 hover:underline hover:text-lime-300"
              onClick={() => setIsDrawerOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden lg:flex w-full mt-[350px] justify-around gap-6 text-blue-600 font-medium">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="font-bold text-black text-[18px] lg:text-[45px] text-center 
              tracking-[-1.35px] leading-[54.0px] hover:underline hover:text-lime-300">
            {item.title}
          </a>
        ))}
      </nav>
      
      <FadeInOnScroll>
      <section id="about" className="w-full max-w-7xl mx-auto px-10 my-[500px]">
        <h2 className="text-6xl md:text-[90px] font-bold">about me</h2>
        <p className="text-base/8 md:text-xl lg:text-3xl md:leading-[2] lg:leading-[2] text-gray-800 mt-5 md:mt-12">
        대학교에서 정보사회학, 커뮤니케이션디자인학을 전공한 뒤 프로그래밍에 매력을 느끼고 웹 개발을 업으로 삼고 있습니다. 
        몰입을 즐기고, 문제를 사랑합니다. 다양한 경험과 의견이 어우러질 때, 더 나은 결과가 탄생한다는 믿음을 갖고 세상을 더 나은 곳으로 만들기 위해 견문을 쌓고 있습니다.
        </p>
      </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
      <section id="projects" className="w-full max-w-7xl mx-auto px-10 my-[500px]">
        <h2 className="text-6xl md:text-[90px] font-bold">projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {projects.map((project) => (
            <FadeInOnScroll key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
              />
            </FadeInOnScroll>
          ))}
        </div>
      </section>
      </FadeInOnScroll>
      
      <FadeInOnScroll>
      <section id="contact" className="w-full max-w-7xl mx-auto px-10 mt-[500px]">
        <h2 className="text-5xl md:text-[90px] font-bold text-center">contact me</h2>
        <div className="mt-10 md:mt-20">
          {contactMethods.map((item) => (
            <a
              key={item.title}
              href={`${item.link}`}
              className="block text-3xl md:text-[55px] text-center mt-1 md:mt-8 hover:text-lime-300">
              {item.title}
            </a>
          ))}
        </div>
      </section>
      
      {/* 로고 */}
      <div className="flex justify-center mt-10 mb-20 md:mt-20 md:mb-[250px]">
        <img
          className="w-[70px] md:w-[150px]"
          alt="Hs logo top"
          src="/hs_logo.png"
        />
      </div>
      </FadeInOnScroll>
    </div>
  );
}

