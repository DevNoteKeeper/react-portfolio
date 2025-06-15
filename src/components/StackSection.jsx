import React from 'react';
import {IMAGE_BASE} from '../constants/ImageBase';

const stacks = [
    {
        category: 'Development',
        items: [
            {name:'Processing', logo: `${IMAGE_BASE.development}processing.svg`},
            {name:'Java', logo: `${IMAGE_BASE.development}java.png`},
            {name:'unity', logo: `${IMAGE_BASE.development}unity.png`},
            {name:'HTML, CSS, JS', logo: `${IMAGE_BASE.development}weblan.png`},
            {name:'React', logo: `${IMAGE_BASE.development}react.png`},
            {name:'flutter', logo: `${IMAGE_BASE.development}flutter.png`},
            {name:'Vue.js', logo: `${IMAGE_BASE.development}vue.png`},
            {name:'python', logo: `${IMAGE_BASE.development}python.png`},
        ]
    },
    {
        category: 'Design',
        items: [
            {name:'Figma', logo: `${IMAGE_BASE.design}figma.png`},
            {name: 'vrew', logo: `${IMAGE_BASE.design}vrew.png` },
            {name:'illustrator', logo: `${IMAGE_BASE.design}illustrator.png`},
            {name:'Blender', logo: `${IMAGE_BASE.design}blender.png`},
            {name:'photoshop', logo: `${IMAGE_BASE.design}photoshop.png`},
            {name:'premiere', logo: `${IMAGE_BASE.design}premiere.png`},
            {name:'aftereffect', logo: `${IMAGE_BASE.design}aftereffect.png`},

        ]
    },
    {
        category: 'Nocode',
        items: [
            {name:'webflow', logo: `${IMAGE_BASE.nocode}webflow.png`},
            {name:'WordPress', logo: `${IMAGE_BASE.nocode}wordpress.png`},

        ]
    },
        {
        category: 'Community',
        items: [
            {name:'slack', logo: `${IMAGE_BASE.community}slack.png`},
            {name:'Notion', logo: `${IMAGE_BASE.community}notion.png`},
            {name:'trello', logo: `${IMAGE_BASE.community}trello.png`},
            {name:'zapier', logo: `${IMAGE_BASE.community}zapier.png`},

        ]
    },
            {
        category: 'VCS',
        items: [
            {name:'Github', logo: `${IMAGE_BASE.vcs}github.png`},
            {name:'Gitlab', logo: `${IMAGE_BASE.vcs}gitlab.png`},
            {name:'Git', logo: `${IMAGE_BASE.vcs}git.png`},
        ]
    },
]

const StackSection = ({stack}) => {
    return(
        <section id='stack' className="py-20">
            <h2 className="text-sectionTitle text-point mb-16">Skill & Tool</h2>

            <div className="space-y-20">
                {stacks.map((category) =>
                (
                    <div key={category.category} className='flex items-center gap-14 flex-wrap md:flex-nowrap ml-6'>
                        <h3 className="text-sectionSubTitle text-gTitle w-[140px] shrink-0">{category.category}</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10">
                            {category.items.map((tool) => (
                                <div key={tool.name} className="relative flex flex-col items-center group">
                                    <img src={tool.logo} alt={tool.name} className="w-14 h-14 object-contain"/>
                                    <div className='absolute inset-0 flex items-center justify-center text-white text-xs font-semibold 
                                    bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity rounded'>
                                        {tool.name}
                                    </div>
                                </div>
                            ))}
                            </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StackSection;
