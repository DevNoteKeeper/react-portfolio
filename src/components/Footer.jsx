import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* 이름 & 소개 */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-sectionSubTitle font-semibold leading-relaxed">
            Seoyoon Choi
          </h3>
          <p className="text-gDesc">Frontend Developer & UI/UX Designer</p>
        </div>

        {/* 소셜 링크 */}
        <div className="flex space-x-6 text-gDesc">
          <a
            href="https://github.com/DevNoteKeeper"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className=" hover:text-point transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/seoyoon-choi-53630515a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className=" hover:text-point transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:s.choi-1@student.utwente.nl"
            aria-label="Email"
            className=" hover:text-point transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gDesc">
        © 2025 Seoyoon Choi. All rights reserved.
      </div>
    </footer>
  );
}
