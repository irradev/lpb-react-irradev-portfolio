// https://www.svgrepo.com/vectors/

import { TFilterTechnologies } from '../data/filterTechnologies.type';

import svgHTML from '../assets/img/technologies/html-logo.svg';
import svgJavaScript from '../assets/img/technologies/javascript-logo.svg';
import svgTypeScript from '../assets/img/technologies/typescript-logo.svg';
import svgReact from '../assets/img/technologies/react-logo.svg';
import svgVue from '../assets/img/technologies/vue-logo.svg';
import svgNextJs from '../assets/img/technologies/nextjs-logo.svg';
import svgNuxtJs from '../assets/img/technologies/nuxtjs-logo.svg';
import imgSergey from '../assets/img/technologies/sergey-32x32.png';
import svgFlutter from '../assets/img/technologies/flutter.svg';

export const useImageFilterTechnology = (name: TFilterTechnologies, isActive: boolean) => {

  const img: Record<TFilterTechnologies, string> = {
    'HTML': svgHTML,
    'Javascript': svgJavaScript,
    'Typescript': svgTypeScript,
    'Sergey': imgSergey,
    'React': svgReact,
    'Vue': svgVue,
    'NextJs': svgNextJs,
    'Nuxt': svgNuxtJs,
    'Flutter': svgFlutter,
  }

  return (
    <img
      className={`w-10 h-10 ${name === 'Sergey' ? 'rounded-[10px]' : ''}
      group-hover:-translate-y-1
      group-hover:scale-125
      transition-all duration-200 ease-in-out
      ${isActive ? 'scale-125 -translate-y-1' : ''}
      `}
      src={img[name]}
      title={name}
    />
  )
};
