import React from 'react';
import { IMAGE_BASE } from '../constants/ImageBase';
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

const abouts = [
    {
        category: 'About',
        items: [
            {name:'mypic', logo: `${IMAGE_BASE.about}mypic.jpg`},
        ]
    },]

const AboutSection = ({abouts}) => {
    return(
        <section id='about' className="py-16">
            <h2 className="text-sectionTitle text-point mb-10">About</h2>
        
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-32 px-1">
            {/* 왼쪽 이미지 */}
        <div className="flex-shrink-0 w-64 rounded-2xl overflow-hidden shadow-lg drop-shadow-lg h-full">
          <img
            src={`${IMAGE_BASE.about}mypic.jpg`}
            alt="My Pic"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 오른쪽 텍스트 */}
                <div className="text-gTitle font-noto">
                <p className="text-gTitle text-sectionSubTitle font-semibold mb-8">
                최서윤     |     Seoyoon Choi
          </p>
          <p className="text-point font-semibold mb-2">
            아이디어를 현실로 만드는 올라운드 플레이어
          </p>
          <p className="text-gDesc mb-6 leading-relaxed max-w-lg">
            기획, 디자인 개발까지 전 과정을 책임지며,<br />
            사용자 중심의 완성도 높은 서비스를 제공합니다.
          </p>

          <p className="text-point font-semibold mb-2">
            A versatile creator who turns ideas into reality
          </p>
          <p className="text-gDesc mb-6 leading-relaxed max-w-lg">
            From planning and design to development,<br />
            I deliver seamless, user-focused solutions.
          </p>

          <p className="text-gTitle mb-2">📍 Enschede, Netherlands</p>

          <p className="text-gTitle mb-6">🌐 Korean, English, Dutch</p>

          {/* 아이콘 및 링크 */}
          <div className="flex gap-6 text-gDesc">
            <a
              href="https://github.com/DevNoteKeeper"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-point transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/yuni_s18/?igsh=YW1ram1uM2p5M2ds&utm_source=qr#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-point transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:s.choi-1@student.utwente.nl"
              className="hover:text-point transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
        </section>
    );
};

export default AboutSection;