import React, { FC, SetStateAction, useRef, useState } from 'react';

import { useImageTechnology } from '../hooks/useImageTechnology';
import { existInFavorites, toggleFavorite, favoriteProjects } from '../utils';
import { useNavigate } from 'react-router';

import { TagStatusProject } from './TagStatusProject';

import { FiGithub, FiLink } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { TbBrandGumroad } from 'react-icons/tb';

import { IProject } from '../data/projects';

import { TTabsState } from './Projects';


import 'animate.css';

interface ProjectBentoItemProps {
  index: number;
  project: IProject;
  tabSelected: TTabsState;
  setClickedFavorites: (
    prev: SetStateAction<{ clicks: number; isAdded: boolean }>
  ) => void;
}

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-2 md:row-span-1",
  small: "md:col-span-1 md:row-span-1",
}

export const ProjectBentoItem: FC<ProjectBentoItemProps> = ({
  index,
  project,
  tabSelected,
  setClickedFavorites,
}) => {
  const navigate = useNavigate();
  const [isInFavorites, setIsInFavorites] = useState(
    existInFavorites(project.id)
  );

  const $cardProject = useRef<HTMLDivElement | null>(null);
  const size = project.uiSize || 'medium';

  const handleNavigate = () => {
    navigate(`/project/${project.slug}`);
  };

  const handleFavorites = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(id);
    setIsInFavorites(!isInFavorites);
    setClickedFavorites((prev) => ({
      clicks: prev.clicks + 1, // ? this is just for listening changes in state
      isAdded: existInFavorites(id),
    }));

    if (isInFavorites && tabSelected === 'Favorites') {
      quitFromFavorites();
    }
  };

  // ? I think this implementation is not the correct way...
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
      className={`
        animate__animated animate__fadeInDown animate__faster
        
        ${tabSelected === 'Favorites'
          ? isInFavorites
            ? ''
            : `animate__animated animate__fadeOutUp animate__faster`
          : tabSelected === 'ALL'
            ? `${sizeClasses[size]}`
            : ``
        } `}
      style={{
        animationDelay: `${index / 14}s`,
      }}
    >
      <div className={`project-bento-item cursor-pointer`} onClick={handleNavigate}>
        {project.technologies.map((name, index) => (
          <div
            key={'tag_' + index + name}
            className="z-10 absolute h-9 w-9 "
            style={{
              left: `${index === 0 ? '8' : index * 48 - 7 * (index - 1)}px`,
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
        <div className="image-project-bento-item">
          <div className="flex justify-center items-center h-full overflow-hidden rounded-lg">
            <div className="body-project-bento-item-mask-gradient"></div>
            <img
              className="h-full w-full object-cover"
              src={project.image}
              title={project.name}
              alt={project.name}
              loading="lazy"

            />
          </div>
          {/* <TagStatusProject status={project.status} /> */}
          <div className="body-project-bento-item">
            <h2 className="flexh-srhink-0 text-lg font-bold mxs:whitespace-nowrap mxs:text-ellipsis mxs:overflow-hidden">
              {project.name}
            </h2>
            <div className="flex-grow flex flex-col justify-end">
              <p className="text-sm text-gray-100 pt-1 pb-4 whitespace-nowrap text-ellipsis overflow-hidden line-clamp-2">
                {project.shortDescription}
              </p>
              <div className="flex  justify-between items-end ">
                <div className="flex mxs:flex-col justify-center mxs:items-start items-center gap-2 ">
                  {project.urlGitHub && (
                    <a
                      href={project.urlGitHub}
                      target="_blank"
                      className="btn-card-project bg-stone-700 hover:text-stone-700 hover:bg-gray-100 "
                    >
                      <FiGithub fontSize={18} />
                      {/* <span>github</span> */}
                    </a>
                  )}
                  {project.urlGumroad && (
                    <a
                      href={project.urlGumroad}
                      target="_blank"
                      className="btn-card-project text-black bg-fuchsia-400 hover:text-fuchsia-400 hover:bg-gray-100 "
                    >
                      <TbBrandGumroad fontSize={18} />
                      {/* <span>shop</span> */}
                    </a>
                  )}
                  <a
                    href={project.urlDemo}
                    target="_blank"
                    className="btn-card-project bg-fuchsia-800 hover:text-fuchsia-800 hover:bg-gray-200"
                  >
                    {/* <span>demo</span> */}
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
                      onClick={(e) => handleFavorites(project.id, e)}
                      className="fav-button-project bg-teal-100 border border-slate-700 text-red-500"
                    >
                      <MdFavorite fontSize={24} />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleFavorites(project.id, e)}
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
      </div>
    </div>
  );
};
