import { IProject } from './projects';

import imgOfferJobsApp from '../assets/img/projects/offer-jobs-app.png';
import imgPokemonApp from '../assets/img/projects/demo_pokemon_app_nextjs.png';
import imgModalUiUx from '../assets/img/projects/modal_ui_open_bootcamp.png';
import imgDevCorelPortfolio from '../assets/img/projects/devcorel-portfolio.png';
import imgViteTypescriptNotes from '../assets/img/projects/vite-typescript-notes.png';
import imgReactVirtualizedDataTables from '../assets/img/projects/react-virtualized-data-tables.png';
import imgReactMessengerOld from '../assets/img/projects/react-messenger-old.png';
import imgIrraDevPortfolio from '../assets/img/projects/irradev-portfolio.png';
import imgReactChatForms from '../assets/img/projects/react-chat-forms.png';
import imgMemoryMatch from '../assets/img/projects/memory-match.png';
import imgZustandMini from '../assets/img/projects/zustand-mini.png';
import imgReactRouterV6 from '../assets/img/projects/react-router-v6.png';
import imgAnyDrive from '../assets/img/projects/any-drive-gum-road_COVER.png';

export const FrontendProjects: IProject[] = [

  {
    id: 'andr731423',
    name: 'AnyDrive - Web Template',
    shortDescription:
      'Plantilla web con temática de Cloud Service. Incluye páginas clave (Home, Contacto, Login y 404) y enfoque en diseño responsivo y UI consistente.',
    image: imgAnyDrive,
    technologies: ['Vue', 'Vuetify', 'Nuxt', 'SASS'],
    urlGumroad: 'https://irradev.gumroad.com/l/web-template-any-drive',
    urlDemo: 'https://anydrive.netlify.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'dazu731422',
    name: 'Dashboard Zustand',
    shortDescription:
      'Dashboard desarrollado en React como práctica de manejo de estado global usando Zustand, enfocado en simplicidad y escalabilidad.',
    image: imgZustandMini,
    technologies: ['React', 'Tailwind', 'Zustand', 'React Router'],
    urlGitHub: 'https://github.com/irradev/fh-zustand-mini',
    urlDemo: 'https://fh-zustand-mini-yiry.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'edmema731421',
    name: 'Memory Match',
    shortDescription:
      'Juego de memorama desarrollado en React, enfocado en lógica de estado, componentes reutilizables y experiencia de usuario.',
    image: imgMemoryMatch,
    technologies: ['React', 'Tailwind'],
    urlGitHub: 'https://github.com/irradev/lpb-react-memory-match',
    urlDemo: 'https://react-memory-match.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'rechafo3948271',
    name: 'React Chat Forms',
    shortDescription:
      'Aplicación de formularios con interacción tipo chat, desarrollada como prueba técnica, enfocada en UX, flujo conversacional y manejo de estado.',
    image: imgReactChatForms,
    technologies: ['React', 'StyledComponents'],
    urlGitHub: 'https://github.com/irradev/prutec-chat-forms',
    urlDemo: 'https://react-chat-forms.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'irpo20137771',
    name: 'irradev Portfolio',
    shortDescription:
      'Portafolio personal desarrollado en React, con diseño totalmente responsivo y enfoque en claridad visual y estructura de componentes.  Mínimo de ancho de 280px.',
    image: imgIrraDevPortfolio,
    technologies: ['React', 'Tailwind'],
    urlGitHub: 'https://github.com/irradev/lpb-react-portfolio',
    urlDemo: 'https://irradev-portfolio.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'ofreap132',
    name: 'OfferJobs Responsive App',
    shortDescription: 'Proyecto Frontend en React enfocado en la implementación de Redux para manejo de estado y diseño responsivo.',
    image: imgOfferJobsApp,
    technologies: ['React', 'Redux'],
    urlGitHub: 'https://github.com/irradev/lpb-react-offerjobs',
    urlDemo: 'http://react-offerjobs-responsive-app.vercel.app/',
    type: 'Frontend',
    status: 'Antiguo',
  },
  {
    id: 'mouiuxro134',
    name: 'Modal UI/UX RoutePath',
    shortDescription:
      'Propuesta UI/UX aplicada en React para mejorar la experiencia móvil del componente “Hoja de Ruta”, documentando el análisis y resolución de problemas de navegación y scroll.',
    image: imgModalUiUx,
    technologies: ['React', 'Tailwind'],
    urlGitHub:
      'https://github.com/irradev/propuestas-open-bootcamp-ui-modal-hoja-de-ruta',
    urlDemo: 'http://ui-modal-hoja-de-ruta.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'poapp1482',
    name: 'Pokemon App',
    shortDescription: 'Aplicación en Next.js para listado de Pokémon, con manejo de favoritos y enfoque en renderizado eficiente y navegación.',
    image: imgPokemonApp,
    technologies: ['NextJs'],
    urlGitHub: 'https://github.com/irradev/next-pokemon-app',
    urlDemo: 'https://nextpokemonapp.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'rero731422',
    name: 'React Router Dom v6',
    shortDescription: 'Práctica de enrutamiento y navegación en React usando React Router Dom v6.',
    image: imgReactRouterV6,
    technologies: ['React', 'React Router'],
    urlGitHub: 'https://github.com/irradev/jm-react-router-6',
    urlDemo: 'https://react-router-v6-cyan.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'depo14022',
    name: 'DevCorel Portfolio',
    shortDescription: 'Práctica de dark mode y efectos visuales usando clip-path en CSS.',
    image: imgDevCorelPortfolio,
    technologies: ['Sergey'],
    urlGitHub: 'https://github.com/irradev/devcorel-portfolio',
    urlDemo: 'https://devcorel-portfolio.vercel.app/',
    type: 'Frontend',
    status: 'Antiguo',
  },
  {
    id: 'tyno20192',
    name: 'Typescript Notes',
    shortDescription: 'Aplicación de notas desarrollada con Vite, TypeScript y Tailwind, enfocada en tipado estricto, estructura de componentes y UI ligera.',
    image: imgViteTypescriptNotes,
    technologies: ['Typescript', 'Tailwind'],
    urlGitHub: 'https://github.com/irradev/vite-typescript-tasknotes',
    urlDemo: 'https://vite-typescript-tasknotes.vercel.app/',
    type: 'Frontend',
    status: 'Terminado',
  },
  {
    id: 'revida39248',
    name: 'React Virtualized DataTables',
    shortDescription:
      'Implementación de tablas virtualizadas en React para renderizar grandes volúmenes de datos optimizando rendimiento y consumo de recursos.',
    image: imgReactVirtualizedDataTables,
    technologies: ['React', 'Typescript'],
    urlDemo: 'https://react-virtualized-data-tables.vercel.app/',
    type: 'Frontend',
    status: 'Antiguo',
  },
  {
    id: 'remere0138482',
    name: 'React Messenger Responsive',
    shortDescription:
      'Proyecto Frontend experimental enfocado en UI responsiva, implementando slides y layouts adaptativos mediante media queries en CSS.',
    image: imgReactMessengerOld,
    technologies: ['React', 'Tailwind'],
    urlDemo: 'https://react-messenger-responsive.vercel.app/',
    type: 'Frontend',
    status: 'Antiguo',
  },
];
