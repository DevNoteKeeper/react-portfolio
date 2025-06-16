import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import AboutMeSection from "../components/AboutMeSection";
import StackSection from "../components/StackSection";
import ProjectSection from "../components/ProjectSection";
import EducationSection from "../components/EducationSection";
import CareerSection from "../components/CareerSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 64;
        const elementPosition =
          el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
      // 스크롤 후 state 초기화 (URL 깨끗하게)
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="bg-bgDark text-gDesc font-noto min-h-screen">
      <Header />
      <MainSection id="home" />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg-px-8 pt-16">
        <AboutMeSection id="about" />
        <StackSection id="stack" />
        <ProjectSection id="project" />
        <EducationSection id="education" />
        <CareerSection id="career" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
