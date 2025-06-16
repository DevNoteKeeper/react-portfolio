import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  //각 섹션으로 스크롤 이동 함수
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 64; // 헤더 높이(px) - 실제 높이에 맞게 조절
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  //스크롤 위치에 따라 activeSection 업데이트
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "stack",
      "project",
      "education",
      "career",
      "contact",
    ];
    const onScroll = () => {
      let current = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const getSectionLabel = (section) => {
    switch (section) {
      case "home":
        return "Home";
      case "about":
        return "About Me";
      case "stack":
        return "Stack";
      case "project":
        return "Project";
      case "education":
        return "Education";
      case "career":
        return "Career";
      case "contact":
        return "Contact";
      default:
        return section.charAt(0).toUpperCase() + section.slice(1);
    }
  };

  const [signInActive, setSignInActive] = useState(false);

  const handleMenuClick = (section) => {
    setSignInActive(false);
    scrollToSection(section);
    window.history.pushState(null, "", `#${section}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-bgDark">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 p-5">
        {/* LOGO */}
        <div
          className="text-xl font-bold cursor-pointer text-point"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SY
        </div>
        <div className="md:flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-gTitle">
            {[
              "home",
              "about",
              "stack",
              "project",
              "education",
              "career",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => handleMenuClick(section)}
                className={`hover:text-point transition ${
                  activeSection === section
                    ? "text-point font-bold"
                    : "text-gTitle hover:font-bold"
                }`}
                style={{
                  color: activeSection === section ? "#64FFDA" : "#CCD6F6",
                }}
              >
                {getSectionLabel(section)}
              </button>
            ))}
          </nav>

          {/* Signin Button */}

          <button
            className={`px-4 py-2 rounded transition ${
              signInActive
                ? "text-point font-bold"
                : "text-gTitle hover:font-bold"
            }`}
            onClick={() => setSignInActive(true)}
          >
            Sign In
          </button>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
