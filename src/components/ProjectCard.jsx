// ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project, isEven }) {
  return (
    <div
      className={`flex-shrink-0 w-full sm:w-80 md:w-96 overflow-hidden rounded-xl flex ${
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
        <div className="absolute inset-0 bg-indigo-500 bg-opacity-20" />
      </div>

      {/* Info */}
      <div
        className={`md:w-2/5 w-full bg-gray-900 flex flex-col justify-center px-4 py-4 gap-2 ${
          isEven ? "md:items-start md:text-left" : "md:items-end md:text-right"
        } items-center text-center`}
      >
        <p className="text-sm text-gray-400">{project.team}</p>
        <h3 className="text-lg font-bold text-indigo-400">{project.title}</h3>
        <p className="text-xs text-gray-400">{project.period}</p>
      </div>
    </div>
  );
}
