import { FrontendProjects } from './frontendProjects';

export type TProject = 'Frontend' | 'Backend' | 'Fullstack';
export type TStatus = 'Desarrollando' | 'Terminado';

export interface IProject {
   id: string;
   name: string;
   shortDescription: string;
   image: string;
   imageTechnologies: string[];
   urlGitHub?: string;
   urlDemo?: string;
   type: TProject;
   status: TStatus;
}

export const projects: IProject[] = [...FrontendProjects];
