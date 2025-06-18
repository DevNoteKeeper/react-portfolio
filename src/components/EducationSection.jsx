import React from "react";
import { useTranslation } from "react-i18next";
import { IMAGE_BASE } from "../constants/ImageBase";

const educations = [
  { id: "twente", logo: `${IMAGE_BASE.education}twente.png` },
  { id: "saxion", logo: `${IMAGE_BASE.education}saxion.png` },
  { id: "hanyang", logo: `${IMAGE_BASE.education}hanyang.png` },
  { id: "sunrin", logo: `${IMAGE_BASE.education}sunrin_h.png` },
];

const EducationSection = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20">
      <h2 className="text-sectionTitle text-gTitle mb-16">Education</h2>
      <div className="max-w-1xl space-y-12">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="flex items-start gap-10 flex-wrap md:flex-nowrap ml-6"
          >
            {/* 로고 */}
            <div className="w-[136px] h-[136px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <img
                src={edu.logo}
                alt={`${edu.id} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* 텍스트 */}
            <div className="text-gTitle font-noto mt-1">
              <p className="font-semibold text-sectionSubTitle mb-2">
                {t(`education.${edu.id}.school`)} _{" "}
                {t(`education.${edu.id}.department`)}
              </p>
              <p className="text-gTitle text-sectionDescription">
                {t(`education.${edu.id}.location`)} &nbsp;|&nbsp;{" "}
                {t(`education.${edu.id}.period`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
