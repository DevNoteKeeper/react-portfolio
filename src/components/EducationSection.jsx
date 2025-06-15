import React from 'react';
import { IMAGE_BASE } from '../constants/ImageBase';


const educations = [
    {
        category: 'Education',
        items: [
            {
                school: 'Universiteit Twente',
                logo: `${IMAGE_BASE.education}twente.png`,
                department: 'Creative Technology',
                location: '📍 Enschede, Netherlands',
                period: '2024.Sep - Current'
            },
            {
                school: 'Hogeschool Saxion',
                logo: `${IMAGE_BASE.education}saxion.png`,
                department: 'ICT',
                location: '📍 Deventer, Netherlands',
                period: '2023.Sep - 2024.Aug'
            },
            {
                school: 'Hanyang Cyber University',
                logo: `${IMAGE_BASE.education}hanyang.png`,
                department: 'New Media Design',
                location: '📍 Seoul, Korea',
                period: '2019.Mar - 2022.Jun'
            },
            {
                school: 'Sunrin Internet High School',
                logo: `${IMAGE_BASE.education}sunrin_h.png`,
                department: 'Techno Management',
                location: '📍 Seoul, Korea',
                period: '22015.Feb - 2018.Feb'
            },
        ]
    },]

const EducationSection = () => {
    return (
        <section id="education" className="py-20">
            <h2 className="text-sectionTitle text-point mb-16">Education</h2>
        <div className="max-w-1xl space-y-12">
          {educations.map((category) =>
            category.items.map((edu) => (
              <div key={edu.school} className="flex items-flex-start gap-10 flex-wrap md:flex-nowrap ml-6">
                {/* 왼쪽 로고 */}
                <div className="w-[136px] h-[136px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
  
                {/* 오른쪽 텍스트 */}
                <div className="text-gTitle font-noto mt-1">
                  <p className="font-semibold text-sectionSubTitle mb-2">
                    {edu.school} _ {edu.department}
                  </p>
                  <p className="text-gTitle text-sectionDescription">
                    {edu.location} &nbsp;|&nbsp; {edu.period}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    );
};

export default EducationSection;