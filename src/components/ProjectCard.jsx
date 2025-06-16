import React, { useState } from "react";

export default function ProjectCard({ project, isEven, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex-shrink-0 w-full sm:w-80 md:w-96 overflow-hidden rounded-xl flex cursor-pointer ${
        isEven ? "flex-row-reverse" : "flex-row"
      } shadow-lg m-8`}
      style={{
        transform: isEven ? "translateY(20px)" : "translateY(-20px)",
      }}
    >
      {/* Image */}
      <div className="md:w-3/5 w-full h-auto relative">
        <img
          src={project.image}
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
            <p className="text-bgDark font-bold text-sm max-w-xs">
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
