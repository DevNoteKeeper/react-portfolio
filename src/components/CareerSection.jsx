import React from 'react';
import { IMAGE_BASE } from '../constants/ImageBase';

const careers = [
    {
        category: 'Career',
        items: [
            {
                company: 'TeamSparta',
                logo: `${IMAGE_BASE.career}sparta.png`,
                role: 'Freelancer',
                location: '📍 Seoul, Korea',
                period: '2022.March - Current'
            },
            {
                company: 'Shim Company Korea',
                logo: `${IMAGE_BASE.career}shim.png`,
                role: 'Exhibition Assistant',
                location: '📍 Seoul, Korea',
                period: '2020.Oct - 2021.Dec'
            },
            {
                company: 'Mom’s Touch',
                logo: `${IMAGE_BASE.career}moms.png`,
                role: 'Manager',
                location: '📍 Seoul, Korea',
                period: '2019.Feb - 2020.June'
            },
            {
                company: 'Lucidpromo',
                logo: `${IMAGE_BASE.career}lucid.png`,
                role: 'Marketing Concierge',
                location: '📍 Seoul, Korea',
                period: '2017.July - 2018.Sep'
            },
        ]
    },]

const CareerSection = () => {
    return(
        <section id="career" className="py-20">
            <h2 className="text-sectionTitle text-point mb-16">Career</h2>
        <div className="max-w-1xl space-y-12">
          {careers.map((category) =>
            category.items.map((career) => (
              <div key={career.company} className="flex items-flex-start gap-10 flex-wrap md:flex-nowrap ml-6">
                {/* 왼쪽 로고 */}
                <div className="w-[136px] h-[136px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={career.logo}
                    alt={`${career.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
  
                {/* 오른쪽 텍스트 */}
                <div className="text-gTitle font-noto mt-1">
                  <p className="font-semibold text-sectionSubTitle mb-2">
                    {career.company} _ {career.role}
                  </p>
                  <p className="text-gTitle text-sectionDescription">
                    {career.location} &nbsp;|&nbsp; {career.period}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    );
};

export default CareerSection;