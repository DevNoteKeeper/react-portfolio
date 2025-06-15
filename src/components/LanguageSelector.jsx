import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", country_code: "us", label: "English" },
  { code: "ko", country_code: "kr", label: "한국어" },
  { code: "nl", country_code: "nl", label: "Nederlands" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  const current =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center gap-2 px-3 py-2 text-gTitle rounded-md text-md hover:bg-point-dark"
      >
        <span
          className={`flag-icon flag-icon-${current.country_code}`}
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "1.5rem",
            height: "1.5rem",
            boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.06)",
          }}
        ></span>
        {current.label}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center gap-2 px-4 py-2 text-bgDark text-sm w-full text-left hover:bg-gray-100 rounded-md"
            >
              <span
                className={`flag-icon flag-icon-${lang.country_code}`}
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "1.5rem",
                  height: "1.5rem",
                  boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.06)",
                }}
              ></span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
