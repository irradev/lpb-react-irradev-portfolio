import { v4 as uuidv4 } from 'uuid';
import { IProject } from './projects';

export const FrontendProjects: IProject[] = [
   {
      id: uuidv4(),
      name: 'OfferJobs Responsive App',
      shortDescription: 'Aplicación para Ofertas de Trabajo',
      image: '',
      imageTechnologies: [''],
      urlGitHub: 'https://github.com/irradev/lpb-react-offerjobs',
      urlDemo: 'http://react-offerjobs-responsive-app.vercel.app/',
      type: 'Frontend',
   },
   {
      id: uuidv4(),
      name: 'Modal UI/UX RoutePath',
      shortDescription:
         'Propuesta UI/UX sobre el componente Hoja de Ruta para OpenBootcamp',
      image: '',
      imageTechnologies: [''],
      urlGitHub:
         'https://github.com/irradev/propuestas-open-bootcamp-ui-modal-hoja-de-ruta',
      urlDemo: 'http://ui-modal-hoja-de-ruta.vercel.app/',
      type: 'Frontend',
   },
   {
      id: uuidv4(),
      name: 'Pokemon App',
      shortDescription: 'Listado de Pokémons con Funcionalidad de Favoritos',
      image: '',
      imageTechnologies: [''],
      urlGitHub:
         'https://github.com/irradev/propuestas-open-bootcamp-ui-modal-hoja-de-ruta',
      urlDemo: 'http://ui-modal-hoja-de-ruta.vercel.app/',
      type: 'Frontend',
   },
];
