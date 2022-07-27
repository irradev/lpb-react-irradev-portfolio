import React, { FC } from 'react';
import { TTechnologies } from '../data/technologies.type';

import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiRedux, SiTypescript } from 'react-icons/si';
import imgSergey from '../assets/img/technologies/sergey-32x32.png';

export const useImageTechnology = (name: TTechnologies) => {
   switch (name) {
      case 'React':
         return <FaReact fontSize={20} />;
      case 'Redux':
         return <SiRedux fontSize={20} />;
      case 'NextJs':
         return <TbBrandNextjs fontSize={20} />;
      case 'Typescript':
         return <SiTypescript fontSize={20} />;
      case 'Tailwind':
         return <SiTailwindcss fontSize={20} />;
      case 'Sergey':
         return (
            <img
               className="w-5 h-5 rounded-full"
               src={imgSergey}
               title="SSG Sergey"
            />
         );
      default:
         return <span className="text-xs font-bold">{name}</span>;
         break;
   }
};
