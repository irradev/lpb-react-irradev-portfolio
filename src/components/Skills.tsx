import React, { ReactElement, useRef } from 'react';

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiIonic,
  // DiFirebase,
  // DiPhp,
  // DiNodejsSmall,
  // DiNginx,
  // DiMysql,
  // DiMongodb,
  // DiAngularSimple,
} from 'react-icons/di';

import { FaVuejs } from 'react-icons/fa';
import { SiMui, SiVuetify, SiTailwindcss, SiNuxtdotjs, SiFlutter } from 'react-icons/si';
import { TbHexagonLetterG, TbBrandNextjs } from 'react-icons/tb';

import { SectionCard } from './ui/SectionCard';
import { CardSkill } from './CardSkill';
import 'animate.css';

interface ITechnologies {
  id: number;
  name: string;
  icon: ReactElement;
}

export const Skills = () => {
  const $skillsCardContainer = useRef<HTMLDivElement | null>(null);

  const technologies = getTechnologies();

  return (
    <section
      className="flex justify-center items-center relative "
      id="skills"
    >
      <div className="container mxs:pb-12 pb-10 pt-0 sm:pb-0 ">
        <SectionCard className="">
          <>
            <h2 className="text-xl font-bold uppercase">Tecnologías</h2>
            <p className="text-secondary text-lg text-center py-2 sm:py4">
              Tecnologías que he utilizado a lo largo de mi trayectoria como desarrollador frontend.
            </p>
            <div
              ref={$skillsCardContainer}
              className="flex flex-wrap justify-center mxs:py-0 py-4 sm:py-8"
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

const getTechnologies = (): ITechnologies[] => {
  const techs = [
    {
      name: 'Javascript',
      icon: <DiJsBadge />,
    },
    {
      name: 'React',
      icon: <DiReact />,
    },
    {
      name: 'Vue',
      icon: <FaVuejs />,
    },
    {
      name: 'Ionic',
      icon: <DiIonic />,
    },
    {
      name: 'Flutter',
      icon: <SiFlutter />,
    },
    {
      name: 'NextJs',
      icon: <TbBrandNextjs />,
    },
    {
      name: 'Nuxt 3',
      icon: <SiNuxtdotjs />,
    },
    {
      name: 'Mui',
      icon: <SiMui />,
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Vuetify',
      icon: <SiVuetify />,
    },
    {
      name: 'GSAP',
      icon: <TbHexagonLetterG />,
    },

    // {
    //   name: 'Angular',
    //   icon: <DiAngularSimple />,
    // },
    // {
    //   name: 'Nginx',
    //   icon: <DiNginx />,
    // },
    // {
    //   name: 'NodeJs',
    //   icon: <DiNodejsSmall />,
    // },

    // {
    //   name: 'MongoDB',
    //   icon: <DiMongodb />,
    // },
    // {
    //   name: 'MySQL',
    //   icon: <DiMysql />,
    // },
    // {
    //   name: 'Firebase',
    //   icon: <DiFirebase />,
    // },
    // {
    //   name: 'PHP',
    //   icon: <DiPhp />,
    // },
  ];

  return techs.map((tech, index) => ({
    ...tech,
    id: index + 1,
  }));
};
