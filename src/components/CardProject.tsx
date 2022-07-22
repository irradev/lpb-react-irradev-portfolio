import Reac, { FC } from 'react';
import { IProject } from '../data/projects';

interface CardProjectProps {
   project: IProject;
}

export const CardProject: FC<CardProjectProps> = ({ project }) => {
   return (
      <div className="flex flex-col">
         <span className="bg-red-400">first</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span className="bg-red-400">last</span>
         {/* <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span>
         <span>{project.name}</span> */}
      </div>
   );
};
