import Reac, { FC } from 'react';
import { FiGithub, FiLink } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { TagStatusProject } from './TagStatusProject';
import { IProject } from '../data/projects';
import TrackVisibility from 'react-on-screen';

interface CardProjectProps {
   project: IProject;
}

export const CardProject: FC<CardProjectProps> = ({ project }) => {
   return (
      <div className="card-project">
         <div className="image-card-project">
            <TagStatusProject status={project.status} />
         </div>
         <div className="body-card-project">
            <h2 className="flexh-srhink-0 text-lg font-bold">{project.name}</h2>
            <div className="flex-grow flex flex-col justify-between">
               <p className="text-sm text-gray-100 pt-2 pb-6">
                  {project.shortDescription}
               </p>
               <div className="flex justify-between items-center ">
                  <div className="flex mxs:flex-col justify-center items-center gap-2">
                     <a href="#" className="btn-card-project bg-stone-700 ">
                        <FiGithub fontSize={18} />
                        <span>github</span>
                     </a>
                     <a href="#" className="btn-card-project bg-fuchsia-800">
                        <span>demo</span>
                        <FiLink fontSize={18} />
                     </a>
                  </div>
                  <button className="flex justify-center bg-stone-300 items-center p-1 mr-1 rounded-full shadow-md cursor-pointer text-slate-700">
                     <MdFavoriteBorder fontSize={24} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
