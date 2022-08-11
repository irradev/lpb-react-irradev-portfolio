import { v4 as uuidv4 } from 'uuid';
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

export const FrontendProjects: IProject[] = [
   {
      id: 'rechafo3948271',
      name: 'React Chat Forms',
      shortDescription: 'Aplicación de formularios estilo chat.',
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
         'Portafolio personal con diseño responsivo. Mínimo de ancho de 280px.',
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
      shortDescription: 'Aplicación para Ofertas de Trabajo.',
      image: imgOfferJobsApp,
      technologies: ['React', 'Redux'],
      urlGitHub: 'https://github.com/irradev/lpb-react-offerjobs',
      urlDemo: 'http://react-offerjobs-responsive-app.vercel.app/',
      type: 'Frontend',
      status: 'Desarrollando',
   },
   {
      id: 'mouiuxro134',
      name: 'Modal UI/UX RoutePath',
      shortDescription:
         'Propuesta UI/UX sobre el componente Hoja de Ruta para OpenBootcamp.',
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
      shortDescription: 'Listado de Pokémons con Funcionalidad de Favoritos.',
      image: imgPokemonApp,
      technologies: ['NextJs'],
      urlGitHub: 'https://github.com/irradev/next-pokemon-app',
      urlDemo: 'https://nextpokemonapp.vercel.app/',
      type: 'Frontend',
      status: 'Terminado',
   },
   {
      id: 'depo14022',
      name: 'DevCorel Portfolio',
      shortDescription: 'Practicando darkMode y la propiedad clipath de css.',
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
      shortDescription: 'Practica de Vite + Typescript + Tailwind.',
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
         'Renderiza grandes cantidades de componentes sin perder perfomance.',
      image: imgReactVirtualizedDataTables,
      technologies: ['React', 'Typescript'],
      urlDemo: 'https://react-virtualized-data-tables.vercel.app/',
      type: 'Frontend',
      status: 'Desarrollando',
   },
   {
      id: 'remere0138482',
      name: 'React Messenger Responsive',
      shortDescription:
         'Deprecated Version. Practiacando UI Slides con diferentes media querys css.',
      image: imgReactMessengerOld,
      technologies: ['React', 'Tailwind'],
      urlDemo: 'https://react-messenger-responsive.vercel.app/',
      type: 'Frontend',
      status: 'Antiguo',
   },
];
