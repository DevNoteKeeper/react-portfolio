import React from "react";
import { FaGithub } from "react-icons/fa";
export default function ProjectPopup({ project, onClose }) {
  if (!project) return null;
  console.log(project);
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-6 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 이미지 컨테이너 높이 지정 */}
        <div className="flex-none mb-4 h-80">
          <img
            src={project.main_image}
            alt="Main"
            className="w-full h-full object-contain rounded"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>

        <p className="text-gray-700 mb-4">{project.description}</p>
        {project.additional_images?.length > 0 && (
          <>
            <h3 className="text-xl font-semibold font-bgDark mt-4 mb-2">
              Additional Images
            </h3>
            <div className="flex gap-4 overflow-x-auto">
              {project.additional_images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Additional ${idx}`}
                  className="h-24 object-cover rounded"
                />
              ))}
            </div>
          </>
        )}
        {project.languages?.length > 0 || project.tools?.length > 0 ? (
          <>
            <h3 className="text-xl font-semibold font-bgDark  mt-4 mb-2">
              Languages & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.languages?.map((lang, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {lang}
                </span>
              ))}
              {project.tools?.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </>
        ) : null}
        {project.link && (
          <div className="mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bgDark hover:text-blue-800 transition"
              aria-label="GitHub Link"
            >
              <FaGithub size={30} />
            </a>
          </div>
        )}
        <button
          className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
