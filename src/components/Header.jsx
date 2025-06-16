import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("home");

  // 섹션으로 스크롤 이동 함수
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 64;
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 스크롤 위치 따라 activeSection 업데이트 (메인 페이지일 때만)
  useEffect(() => {
    if (location.pathname !== "/") return; // 메인페이지가 아니면 실행 안함

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
      const scrollMiddle = window.innerHeight / 2;
      let closestSection = "home";
      let closestDistance = Infinity;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionMiddle = rect.top + rect.height / 2;
          const distance = Math.abs(scrollMiddle - sectionMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = sectionId;
          }
        }
      }

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

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
    if (location.pathname !== "/") {
      // 메인 페이지가 아니면 메인 페이지로 이동하고 state 전달
      navigate("/", { state: { scrollTo: section } });
    } else {
      // 이미 메인 페이지면 바로 스크롤
      scrollToSection(section);
      window.history.pushState(null, "", `#${section}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-bgDark">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 p-5">
        {/* LOGO */}
        <div
          className="text-xl font-bold cursor-pointer text-point"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/", { state: { scrollTo: "home" } });
            } else {
              // 메인 페이지면 home 섹션으로 스크롤
              const el = document.getElementById("home");
              if (el) {
                const headerOffset = 64;
                const elementPosition =
                  el.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              } else {
                // 섹션 없으면 최상단으로 스크롤
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }
          }}
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
          {/* <button
            className={`px-4 py-2 rounded transition ${
              signInActive
                ? "text-point font-bold"
                : "text-gTitle hover:font-bold"
            }`}
            onClick={() => setSignInActive(true)}
          >
            Sign In
          </button> */}
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
