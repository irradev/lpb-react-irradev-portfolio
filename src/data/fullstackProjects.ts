import { IProject } from './projects';
import imgTesloShop from '../assets/img/projects/teslo_shop_nextjs_project.png';

export const FullstackProjects: IProject[] = [
  {
    id: 'tesh731423',
    name: 'Teslo Shop Demo',
    shortDescription:
      'Tienda virtual en NextJS 14. Cuenta con un carrito de compras, un sistema de autenticación y una pasarela de pagos con paypal.',
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
  },
];
