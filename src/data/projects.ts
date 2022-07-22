import { FrontendProjects } from './frontendProjects';

export type TProject = 'Frontend' | 'Backend' | 'Fullstack';

export interface IProject {
   id: string;
   name: string;
   shortDescription: string;
   image: string;
   imageTechnologies: string[];
   urlGitHub?: string;
   urlDemo?: string;
   type: TProject;
}

export const projects: IProject[] = [...FrontendProjects];
