import { FrontendProjects } from './frontendProjects';
import { orderProjectByStatus } from '../utils';
import { TTechnologies } from './technologies.type';
import { FullstackProjects } from './fullstackProjects';
import { TTags } from './tags.type';

export type TProject = 'Frontend' | 'Backend' | 'Fullstack';
export type TStatus = 'Desarrollando' | 'Terminado' | 'Actualizado' | 'Antiguo';
export type TUiSize = 'large' | 'medium' | 'small';

export interface IProject {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
  technologies: TTechnologies[];
  urlGitHub?: string;
  urlDemo?: string;
  urlGumroad?: string;
  type: TProject;
  status: TStatus;
  uiSize?: TUiSize;
  tags: TTags[];
}

export const projects: IProject[] = [
  ...orderProjectByStatus([...FrontendProjects, ...FullstackProjects]),
];
