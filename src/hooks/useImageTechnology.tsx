import { TTechnologies } from '../data/technologies.type';

import { FaReact, FaVuejs, FaSass } from 'react-icons/fa';
import { IoLogoVue } from "react-icons/io5";
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiReactrouter,
  SiPrisma,
  SiZod,
  SiPostgresql,
  SiNuxtdotjs,
  SiVuetify,
  SiVitest,
} from 'react-icons/si';
import imgSergey from '../assets/img/technologies/sergey-32x32.png';
import imgZustand from '../assets/img/technologies/zustand-logo_31x26.png';
import imgRiverpod from '../assets/img/technologies/riverpod.png';
import imgAngular from '../assets/img/technologies/angular.png';
import imgMapbox from '../assets/img/technologies/mapbox-logo.png';

import svgTanstackQuery from '../assets/img/technologies/tanstack-logo-white.svg';
import svgVuePinia from '../assets/img/technologies/vue-pinia-logo.svg';
import svgFlutter from '../assets/img/technologies/flutter.svg';
import svgDaisyUI from '../assets/img/technologies/daisyui.svg';

export const useImageTechnology = (name: TTechnologies) => {

  const getImageHtml = (src: string, title: string, classes?: string) => {
    return (
      <img
        className={`w-5 h-5 rounded-full ${classes}`}
        src={src}
        title={title}
      />
    );
  }

  switch (name) {
    case 'HTML':
      return <SiHtml5 fontSize={20} />;
    case 'CSS':
      return <SiCss3 fontSize={20} />;
    case 'Javascript':
      return <SiJavascript fontSize={20} />;
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
    case 'StyledComponents':
      return <SiStyledcomponents fontSize={20} />;
    case 'React Router':
      return <SiReactrouter fontSize={20} />;
    case 'Prisma':
      return <SiPrisma fontSize={20} />;
    case 'Zod':
      return <SiZod fontSize={20} />;
    case 'Postgresql':
      return <SiPostgresql fontSize={20} />;
    case 'Nuxt':
      return <SiNuxtdotjs fontSize={20} />;
    case 'Vue':
      return <FaVuejs fontSize={20} />;
    case 'VueRouter':
      return <IoLogoVue fontSize={20} />;
    case 'Vuetify':
      return <SiVuetify fontSize={20} />;
    case 'SASS':
      return <FaSass fontSize={20} />;
    case 'Vitest':
      return <SiVitest fontSize={20} />;
    case 'Zustand':
      return getImageHtml(imgZustand, 'Zustand');
    case 'Sergey':
      return getImageHtml(imgSergey, 'SSG Sergey');
    case 'TanStackQuery':
      return getImageHtml(svgTanstackQuery, 'TanStackQuery');
    case 'Pinia':
      return getImageHtml(svgVuePinia, 'Pinia');
    case 'Flutter':
      return getImageHtml(svgFlutter, 'Flutter');
    case 'Riverpod':
      return getImageHtml(imgRiverpod, 'Riverpod');
    case 'DaisyUI':
      return getImageHtml(svgDaisyUI, 'DaisyUI');
    case 'Angular':
      return getImageHtml(imgAngular, 'Angular');
    case 'Mapbox':
      return getImageHtml(imgMapbox, 'Mapbox');
    default:
      return <span className="text-xs font-bold">{name}</span>;
  }

};
