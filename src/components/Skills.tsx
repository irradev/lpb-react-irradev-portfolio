import React, { FC, ReactElement, useRef } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import {
   DiHtml5,
   DiCss3,
   DiJsBadge,
   DiReact,
   DiIonic,
   DiFirebase,
   DiPhp,
   DiNodejsSmall,
   DiNginx,
   DiMysql,
   DiMongodb,
   DiAngularSimple,
} from 'react-icons/di';

interface ITechnologies {
   id: number;
   name: string;
   icon: ReactElement;
}

export const Skills = () => {
   const $skillsCardContainer = useRef<HTMLDivElement | null>(null);

   const technologies: ITechnologies[] = [
      {
         id: 1,
         name: 'HTML5',
         icon: <DiHtml5 />,
      },
      {
         id: 2,
         name: 'CSS3',
         icon: <DiCss3 />,
      },
      {
         id: 3,
         name: 'Javascript',
         icon: <DiJsBadge />,
      },
      {
         id: 4,
         name: 'React',
         icon: <DiReact />,
      },
      {
         id: 5,
         name: 'Ionic',
         icon: <DiIonic />,
      },
      {
         id: 55,
         name: 'Angular',
         icon: <DiAngularSimple />,
      },
      {
         id: 6,
         name: 'Nginx',
         icon: <DiNginx />,
      },
      {
         id: 7,
         name: 'NodeJs',
         icon: <DiNodejsSmall />,
      },
      {
         id: 8,
         name: 'PHP',
         icon: <DiPhp />,
      },
      {
         id: 9,
         name: 'MongoDB',
         icon: <DiMongodb />,
      },
      {
         id: 10,
         name: 'MySQL',
         icon: <DiMysql />,
      },
      {
         id: 11,
         name: 'Firebase',
         icon: <DiFirebase />,
      },
   ];

   return (
      <section
         className="skill flex justify-center items-center h-full sm:h-screen relative"
         id="skills"
      >
         <div className="container">
            <div className="flex flex-col justify-center items-center p-4 relative rounded-lg z-10 shadow-lg  mx-auto">
               <h2 className="text-xl uppercase">Tecnologías</h2>
               <p className="text-secondary text-lg text-center py-4">
                  Experiencia en diferentes tecnologías tanto de <b>Backend</b>{' '}
                  como de <b>Frontend</b>
               </p>
               <div
                  ref={$skillsCardContainer}
                  className="grid mxs:grid-cols-3 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 py-4 sm:py-8"
               >
                  {technologies.map((skill) => (
                     <CardSkill
                        key={skill.id}
                        name={skill.name}
                        icon={skill.icon}
                     />
                  ))}
               </div>
               <BackgroundEffect />
            </div>
         </div>
      </section>
   );
};

const BackgroundEffect = () => {
   return (
      <div className="bg-gradient-to-bl from-slate-800 to-stone-800 absolute w-full h-full top-0 right-0 opacity-80 -z-10 rounded-lg "></div>
   );
};

interface CardSkillProps {
   name: string;
   icon: ReactElement;
}

const CardSkill: FC<CardSkillProps> = ({ name, icon }) => {
   return (
      <div className="flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 ease-in-out cursor-default m-2">
         <div className="text-6xl ">{icon}</div>
         <span className="text-lg">{name}</span>
      </div>
   );
};
