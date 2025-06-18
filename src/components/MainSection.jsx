import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MainSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(true);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // IntersectionObserver로 MainSection 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 화면에 절반 이상 보여야 활성
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1920x1080/?technology,code')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-sm" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl"
        >
          {t(`main.title`)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl mt-6 text-white/80 max-w-2xl leading-relaxed"
        >
          {t(`main.sub1`)}
          <br className="hidden md:block" />
          {t(`main.sub2`)}
        </motion.p>

        <motion.a
          href="#/projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          {t(`main.button`)}
        </motion.a>
      </div>

      {/* 마우스를 따라오는 이펙트 */}
      {isActive && (
        <>
          <motion.div
            className="pointer-events-none fixed top-0 left-0 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl z-0"
            animate={{
              x: mousePos.x - 150,
              y: mousePos.y - 150,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          />
          <motion.div
            className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl z-0"
            animate={{
              x: mousePos.x - 200,
              y: mousePos.y - 200,
            }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 18,
            }}
          />
        </>
      )}
    </section>
  );
}
