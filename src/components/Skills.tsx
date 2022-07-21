import React, { FC, ReactElement, useRef } from 'react';

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

import TrackVisibility from 'react-on-screen';
import { SectionCard } from './ui/SectionCard';
import 'animate.css';

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
         className="flex justify-center items-center h-screen relative"
         id="skills"
      >
         <div className="container">
            <SectionCard>
               <>
                  <h2 className="text-xl uppercase">Tecnologías</h2>
                  <p className="text-secondary text-lg text-center py-4">
                     Experiencia en diferentes tecnologías tanto de{' '}
                     <b>Frontend</b> como de <b>Backend</b>
                  </p>
                  <div
                     ref={$skillsCardContainer}
                     className="grid mxs:grid-cols-3 grid-cols-4 sm:grid-cols-6  py-4 sm:py-8"
                  >
                     {technologies.map((skill, index) => (
                        <CardSkill
                           key={skill.id}
                           name={skill.name}
                           icon={skill.icon}
                           index={index}
                        />
                     ))}
                  </div>
               </>
            </SectionCard>
         </div>
      </section>
   );
};

interface CardSkillProps {
   name: string;
   icon: ReactElement;
   index: number;
}

const CardSkill: FC<CardSkillProps> = ({ name, icon, index }) => {
   return (
      <TrackVisibility once={true}>
         {({ isVisible }) => (
            <div
               className={`flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 ease-in-out cursor-default m-2
         ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}
         `}
               style={{
                  animationDelay: `${index / 8}s`,
               }}
            >
               <div className="text-6xl ">{icon}</div>
               <span className="text-lg">{name}</span>
            </div>
         )}
      </TrackVisibility>
   );
};
