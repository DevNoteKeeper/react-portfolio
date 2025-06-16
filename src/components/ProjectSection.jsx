import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "../components/ProjectPopup";

export default function ProjectSection() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((p) => p.main_display !== false); // ✅ main_display 필터링
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - offsetWidth;
    const progress = maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const canScrollHorizontally = el.scrollWidth > el.clientWidth;
      const atStart = el.scrollLeft === 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      if (!canScrollHorizontally) return;

      if ((e.deltaY < 0 && !atStart) || (e.deltaY > 0 && !atEnd)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        onScroll();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    onScroll();
  }, [projects]);

  return (
    <section id="project" className="py-20">
      <div className="max-w-6xl mx-auto py-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gTitle">Project</h2>
          <button
            onClick={() => navigate("/projects")}
            className="border border-gTitle text-gTitle px-4 py-1 rounded-lg text-sm hover:bg-white hover:text-bgDark transition"
          >
            전체보기
          </button>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            style={{ scrollBehavior: "smooth" }}
            className="scrollbar-container rounded-xl bg-[#282D5B] bg-opacity-80 overflow-x-auto overflow-y-hidden flex flex-row gap-8 p-10 min-h-[320px]"
          >
            {projects.map((project, idx) => (
              <div
                key={project.id || idx}
                onClick={(e) => {
                  if (e.target.tagName.toLowerCase() === "a") return; // 링크 클릭 방지
                  setSelectedProject(project);
                }}
                className="cursor-pointer"
              >
                <ProjectCard
                  project={project}
                  isEven={idx % 2 !== 0}
                  useTranslateY={true}
                  isGridLayout={false}
                />
              </div>
            ))}

            <div className="absolute bottom-4 left-4 right-4 h-2 bg-gray-700 rounded-full overflow-hidden shadow-md">
              <div
                className="h-full bg-gTitle transition-all duration-300"
                style={{ width: `${Math.max(scrollProgress * 100, 20)}%` }}
              ></div>
            </div>
          </div>
        </div>
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
