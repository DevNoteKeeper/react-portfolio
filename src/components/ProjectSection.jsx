import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Build CV",
    team: "Team",
    period: "2025.03.12 - 2025.04.04",
    image:
      "https://raw.githubusercontent.com/DevNoteKeeper/dev_hub_imgae/refs/heads/main/main2.png",
  },
  {
    title: "Build CV",
    team: "Team",
    period: "2025.03.12 - 2025.04.04",
    image:
      "https://raw.githubusercontent.com/DevNoteKeeper/dev_hub_imgae/refs/heads/main/main2.png",
  },
  {
    title: "Build CV",
    team: "Team",
    period: "2025.03.12 - 2025.04.04",
    image:
      "https://raw.githubusercontent.com/DevNoteKeeper/dev_hub_imgae/refs/heads/main/main2.png",
  },
  {
    title: "Build CV",
    team: "Team",
    period: "2025.03.12 - 2025.04.04",
    image:
      "https://raw.githubusercontent.com/DevNoteKeeper/dev_hub_imgae/refs/heads/main/main2.png",
  },
];

export default function ProjectSection() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 스크롤 위치에 따라 진행률 계산 함수
  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - offsetWidth;
    const progress = maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0;
    setScrollProgress(progress); // 0~1 사이 값 저장
  };

  // 휠 이벤트를 x축 스크롤로 변환
  const onWheel = (e) => {
    const el = scrollRef.current;
    if (!el) return;

    const canScrollHorizontally = el.scrollWidth > el.clientWidth;
    const atStart = el.scrollLeft === 0;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1; // -1: 부동소수점 오차 보정

    if (!canScrollHorizontally) {
      // 가로 스크롤 불가하면 기본 동작 허용 (세로 스크롤)
      return;
    }

    if (
      (e.deltaY < 0 && !atStart) || // 위로 스크롤 중이고 가로 스크롤 시작 지점 아님
      (e.deltaY > 0 && !atEnd) // 아래로 스크롤 중이고 가로 스크롤 끝 지점 아님
    ) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
      onScroll();
    }
  };
  useEffect(() => {
    onScroll();
  }, []);

  return (
    <section id="project" className="py-20">
      <div className="max-w-6xl mx-auto py-4">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gTitle">Project</h2>
          <button className="border border-gTitle text-gTitle px-4 py-1 rounded-lg text-sm hover:bg-white hover:text-bgDark transition">
            전체보기
          </button>
        </div>

        {/* Project Cards */}
        <div
          ref={scrollRef}
          onWheel={onWheel}
          onScroll={onScroll}
          style={{ scrollBehavior: "smooth" }}
          className="scrollbar-container rounded-xl bg-[#282D5B] bg-opacity-80 overflow-x-auto overflow-y-hidden flex flex-row p-4 relative custom-scrollbar"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} isEven={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
