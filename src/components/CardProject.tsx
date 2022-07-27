import React, { FC, SetStateAction, useRef, useState } from 'react';

import { useImageTechnology } from '../hooks/useImageTechnology';
import { existInFavorites, toggleFavorite, favoriteProjects } from '../utils';

import { TagStatusProject } from './TagStatusProject';

import { FiGithub, FiLink } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import { IProject } from '../data/projects';

import { TTabsState } from './Projects';

import 'animate.css';

interface CardProjectProps {
   index: number;
   project: IProject;
   tabSelected: TTabsState;
   setClickedFavorites: (
      prev: SetStateAction<{ clicks: number; isAdded: boolean }>
   ) => void;
}

export const CardProject: FC<CardProjectProps> = ({
   index,
   project,
   tabSelected,
   setClickedFavorites,
}) => {
   const [isInFavorites, setIsInFavorites] = useState(
      existInFavorites(project.id)
   );

   const $cardProject = useRef<HTMLDivElement | null>(null);

   const handleFavorites = (id: string) => {
      toggleFavorite(id);
      setIsInFavorites(!isInFavorites);
      setClickedFavorites((prev) => ({
         clicks: prev.clicks + 1, // ? this is just for listening changes in state
         isAdded: existInFavorites(id),
      }));
   };

   // ? I think this implementaton is not the correct way...
   const quitFromFavorites = () => {
      let waitingForAnimation = setInterval(() => {
         if (favoriteProjects().length > 0) {
            $cardProject.current?.classList.add('hidden');
         }
         clearInterval(waitingForAnimation);
      }, 700);
   };

   return (
      <div
         ref={$cardProject}
         className={`card-project ${
            tabSelected === 'Favorites'
               ? isInFavorites
                  ? 'animate__animated animate__fadeInDown animate__faster'
                  : `animate__animated animate__fadeOutUp animate__faster ${quitFromFavorites()}`
               : ''
         }`}
         style={{
            animationDelay: `${index / 14}s`,
         }}
      >
         {project.technologies.map((name, index) => (
            <div
               key={'tag_' + index + name}
               className="z-10 absolute h-9 w-9 "
               style={{
                  left: `${index === 0 ? '8' : index + 48}px`,
               }}
            >
               <div className="tag-technology-project">
                  {useImageTechnology(name)}
                  <div className="h-full w-full opacity-0 hover:opacity-100 absolute top-0 left-0 transition-all duration-300 ease-out z-20">
                     <span className="bg-rose-600 border border-rose-900 py-1.5 px-2 tracking-wide text-xs font-bold uppercase text-shadow-xs rounded-md absolute left-0 top-10">
                        {name}
                     </span>
                  </div>
               </div>
               <span className="aux-tag-effect-project"></span>
            </div>
         ))}
         <div className="image-card-project">
            <div className="flex justify-center items-center h-36 m-3 overflow-hidden ">
               <img className="" src={project.image} title={project.name} />
            </div>
            <TagStatusProject status={project.status} />
         </div>
         <div className="body-card-project">
            <h2 className="flexh-srhink-0 text-lg font-bold mxs:whitespace-nowrap mxs:text-ellipsis mxs:overflow-hidden">
               {project.name}
            </h2>
            <div className="flex-grow flex flex-col justify-between">
               <p className="text-sm text-gray-100 pt-2 pb-6 mxs:whitespace-nowrap mxs:text-ellipsis mxs:overflow-hidden">
                  {project.shortDescription}
               </p>
               <div className="flex flex-wrap justify-between items-center ">
                  <div className="flex mxs:flex-col justify-center mxs:items-start items-center gap-2 ">
                     {project.urlGitHub && (
                        <a
                           href={project.urlGitHub}
                           target="_blank"
                           className="btn-card-project bg-stone-700 hover:text-stone-700 hover:bg-gray-100 "
                        >
                           <FiGithub fontSize={18} />
                           <span>github</span>
                        </a>
                     )}
                     <a
                        href={project.urlDemo}
                        target="_blank"
                        className="btn-card-project bg-fuchsia-800 hover:text-fuchsia-800 hover:bg-gray-200"
                     >
                        <span>demo</span>
                        <FiLink fontSize={18} />
                     </a>
                  </div>
                  <div
                     className={
                        isInFavorites ? 'animate__animated animate__jello' : ''
                     }
                  >
                     {isInFavorites ? (
                        <button
                           onClick={() => handleFavorites(project.id)}
                           className="fav-button-project bg-teal-100 border border-slate-700 text-red-500"
                        >
                           <MdFavorite fontSize={24} />
                        </button>
                     ) : (
                        <button
                           onClick={() => handleFavorites(project.id)}
                           className="fav-button-project border border-transparent bg-stone-300 text-slate-700  hover:text-red-500"
                        >
                           <MdFavoriteBorder fontSize={24} />
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
