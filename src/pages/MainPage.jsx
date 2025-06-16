import React from "react";
import Header from "../components/Header";
// import MainSection from '../components/MainSection';
import AboutMeSection from "../components/AboutMeSection";
import StackSection from "../components/StackSection";
// import ProjectSection from '../components/ProjectSection';
import EducationSection from "../components/EducationSection";
import CareerSection from "../components/CareerSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div className="bg-bgDark text-gDesc font-noto min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg-px-8 pt-16">
        {/* <MainSection id="home" /> */}
        <AboutMeSection id="about" />
        <StackSection id="stack" />
        {/* <ProjectSection id="project" /> */}
        <EducationSection id="education" />
        <CareerSection id="career" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
