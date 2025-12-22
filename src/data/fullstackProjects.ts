import { IProject } from './projects';
import imgTesloShop from '../assets/img/projects/teslo_shop_nextjs_project.png';

export const FullstackProjects: IProject[] = [
  {
    id: 'tesh731423',
    name: 'Teslo Shop Demo',
    shortDescription:
      'Demo Fullstack de e-commerce desarrollada en Next.js 14, con autenticación, carrito de compras y flujo de pagos, integrando manejo de estado, validaciones y base de datos.',
    image: imgTesloShop,
    technologies: [
      'NextJs',
      'Tailwind',
      'Zustand',
      'Prisma',
      'Postgresql',
      'Zod',
    ],
    urlGitHub: 'https://github.com/irradev/fh-nextjs-teslo-shop',
    urlDemo: 'https://fh-nextjs-teslo-shop.vercel.app/',
    type: 'Fullstack',
    status: 'Terminado',
    uiSize: 'large',
  },
];
