import React from "react";
import { IMAGE_BASE } from "../constants/ImageBase";
import { useTranslation } from "react-i18next";

const careers = [
  { id: "sparta", logo: `${IMAGE_BASE.career}sparta.png` },
  { id: "shim", logo: `${IMAGE_BASE.career}shim.png` },
  { id: "moms", logo: `${IMAGE_BASE.career}moms.png` },
  { id: "lucid", logo: `${IMAGE_BASE.career}lucid.png` },
];

const CareerSection = () => {
  const { t } = useTranslation();

  return (
    <section id="career" className="py-20">
      <h2 className="text-sectionTitle text-gTitle mb-16">Career</h2>
      <div className="max-w-1xl space-y-12">
        {careers.map((career) => (
          <div
            key={career.id}
            className="flex items-start gap-10 flex-wrap md:flex-nowrap ml-6"
          >
            {/* 로고 */}
            <div className="w-[136px] h-[136px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <img
                src={career.logo}
                alt={`${career.id} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* 텍스트 */}
            <div className="text-gTitle font-noto mt-1">
              <p className="font-semibold text-sectionSubTitle mb-2">
                {t(`career.${career.id}.company`)} _{" "}
                {t(`career.${career.id}.role`)}
              </p>
              <p className="text-gTitle text-sectionDescription">
                {t(`career.${career.id}.location`)} &nbsp;|&nbsp;{" "}
                {t(`career.${career.id}.period`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
