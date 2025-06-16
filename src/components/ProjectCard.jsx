import React, { useState } from "react";

export default function ProjectCard({
  project,
  isEven,
  onClick,
  useTranslateY,
  isGridLayout,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // const handleClick = () => {
  //   if (project.link) {
  //     window.open(project.link, "_blank", "noopener,noreferrer");
  //   }
  // };

  return (
    <div
      // onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-xl flex cursor-pointer shadow-lg ${
        isGridLayout
          ? `w-full ${isEven ? "flex-row-reverse" : "flex-row"}`
          : `flex-shrink-0 w-full sm:w-80 md:w-96 m-8 ${
              isEven ? "flex-row-reverse" : "flex-row"
            }`
      }`}
      style={{
        transform: useTranslateY
          ? isEven
            ? "translateY(20px)"
            : "translateY(-20px)"
          : undefined,
      }}
    >
      {/* Image */}
      <div className="md:w-3/5 w-full h-auto relative">
        <img
          src={project.main_image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered
              ? "bg-gDesc bg-opacity-95 flex items-center p-4"
              : "bg-gDesc bg-opacity-20"
          }`}
          style={{
            justifyContent: isEven ? "flex-end" : "flex-start",
            textAlign: isEven ? "right" : "left",
          }}
        >
          {isHovered && (
            <p className="text-bgDark font-semibold text-sm max-w-xs">
              {project.desc}
            </p>
          )}
        </div>
      </div>

      {/* Info */}
      <div
        className={`md:w-2/5 w-full bg-bgDark flex flex-col justify-center px-4 py-4 gap-2 ${
          isEven ? "md:items-start md:text-left" : "md:items-end md:text-right"
        } items-center text-center`}
      >
        <p className="text-sm text-gTitle">{project.team}</p>
        <h3 className="text-lg font-bold text-point">{project.title}</h3>
        <p className="text-xs text-gDesc">{project.period}</p>
      </div>
    </div>
  );
}
