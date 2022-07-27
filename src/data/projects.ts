import { FrontendProjects } from './frontendProjects';
import { orderProjectByStatus } from '../utils';
import { TTechnologies } from './technologies.type';

export type TProject = 'Frontend' | 'Backend' | 'Fullstack';
export type TStatus = 'Desarrollando' | 'Terminado' | 'Actualizado' | 'Antiguo';

export interface IProject {
   id: string;
   name: string;
   shortDescription: string;
   image: string;
   technologies: TTechnologies[];
   urlGitHub?: string;
   urlDemo?: string;
   type: TProject;
   status: TStatus;
}

export const projects: IProject[] = [...orderProjectByStatus(FrontendProjects)];
