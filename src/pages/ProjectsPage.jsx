import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projects from "../constants/projectsData";

const categories = ["all", "development", "design", "idea"];

const ProjectPage = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type?.includes(filter));
  return (
    <div className="bg-white pt-20 text-bgDark min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-bgDark mb-8">Projects</h2>

        {/* Filter */}
        <div className="flex gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-400 to-teal-400 text-white shadow-lg"
                  : "bg-gray-100 text-bgDark hover:bg-gray-200"
              } cursor-pointer`}
              onClick={() => setFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              className="transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-xl"
              key={project.id}
            >
              <ProjectCard
                project={project}
                isEven={false}
                isGridLayout={true}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
