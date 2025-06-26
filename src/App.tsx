import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ProjectCard from "./components/ProjectCard";
import FadeInOnScroll from "./components/FadeInOnScroll";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Menu, X } from "lucide-react";
import "@google/model-viewer";

export default function App(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // 로딩 화면
  // 퍼센트 점진 증가
  useEffect(() => {
    let percent = 0;
    const interval = setInterval(() => {
      if (percent < 90) {
        percent += 1;
        setLoadingPercent(percent);
      }
    }, 30); // 약 2.7초에 90% 도달

    // 완전 로딩 시
    const handleComplete = () => {
      clearInterval(interval);
      setLoadingPercent(100);
      setTimeout(() => setIsLoaded(true), 300); // 100% 보여준 후 앱 표시
    };

    // 모든 리소스 로드 후 실행
    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
    }

    return () => window.removeEventListener("load", handleComplete);
  }, []);

  if (!isLoaded) {
    return <LoadingScreen percent={loadingPercent} />;
  }

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
    <div className="w-full bg-white text-gray-900">
      {/* Header */}
      <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/your_background_image.jpg')" }}>
        <div className="relative w-full h-full flex items-center justify-center py-20">
          <model-viewer
            className="absolute w-[250px] md:w-[400px] lg:w-[550px] h-[500px] z-10"
            alt="angel sculpture"
            src="/angel_sculpture.glb"
            poster=""
            shadow-intensity="1"
            camera-controls
            interaction-prompt="none"
            disable-zoom
            auto-rotate
          />

          <img
            src="/hs_big_tag_c1.svg"
            alt="Hashin Choi"
            className="relative w-[90%] md:w-[75%] lg:w-[60%] max-w-[1000px] z-0"
          />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden fixed top-4 right-4 z-50">
          <Menu size={32} onClick={() => setIsDrawerOpen(true)} className="cursor-pointer" />
        </div>
      </header>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsDrawerOpen(false)} />
      )}
      <aside className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <X size={28} onClick={() => setIsDrawerOpen(false)} className="cursor-pointer" />
        </div>
        <nav className="flex flex-col items-start px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-lg font-medium text-gray-800 hover:text-lime-500" onClick={() => setIsDrawerOpen(false)}>
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Nav */}
      <nav className="hidden lg:flex justify-center gap-16 pt-12 pb-48 text-xl font-semibold">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="hover:text-lime-500 transition">
            {item.title}
          </a>
        ))}
      </nav>

      {/* About Section */}
      <FadeInOnScroll>
        <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-48 scroll-mt-24">
          <h2 className="text-4xl md:text-6xl font-bold">About Me</h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed">
            대학교에서 정보사회학, 커뮤니케이션디자인학을 전공한 뒤 프로그래밍에 매력을 느끼고 웹 개발을 업으로 삼고 있습니다. 몰입을 즐기고, 문제를 사랑합니다.
            다양한 경험과 의견이 어우러질 때 더 나은 결과가 탄생한다는 믿음을 갖고 세상을 더 나은 곳으로 만들기 위해 견문을 쌓고 있습니다.
          </p>
          {/* 
          <div className="mt-20">
            <img src="/ambient_graphic_1.png" alt="ambient graphic" className="w-full rounded-xl shadow-md" />
          </div>
          */}
        </section>
      </FadeInOnScroll>

      {/* Projects Section */}
      <FadeInOnScroll>
        <section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-48 scroll-mt-24">
          <h2 className="text-4xl md:text-6xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {projects.map((project) => (
              <FadeInOnScroll key={project.id}>
                <ProjectCard {...project} />
              </FadeInOnScroll>
            ))}
          </div>
          {/* 
          <div className="mt-20">
            <img src="/ambient_graphic_1.png" alt="ambient graphic" className="w-full rounded-xl shadow-md" />
          </div>
          */}
        </section>
      </FadeInOnScroll>

      {/* Contact Section */}
      <FadeInOnScroll>
        <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-48 text-center scroll-mt-24">
          <h2 className="text-4xl md:text-6xl font-bold">Contact Me</h2>
          <div className="mt-10 space-y-6">
            {contactMethods.map((item) => (
              <a key={item.title} href={item.link} className="text-2xl md:text-4xl block hover:text-lime-500">
                {item.title}
              </a>
            ))}
          </div>
          <img src="/hs_logo.png" alt="Logo bottom" className="mx-auto mt-16 w-20 md:w-32" />
        </section>
      </FadeInOnScroll>

      <ScrollToTopButton />
    </div>
  );
}

