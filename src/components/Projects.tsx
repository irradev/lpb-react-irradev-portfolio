import React, { useEffect, useMemo, useRef, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import { favoriteProjects } from '../utils';
import { SectionCard } from './ui/SectionCard';
import { CardProject } from './CardProject';
import { TabButton } from './TabButton';

import { MdFavorite } from 'react-icons/md';

import { projects as dataProjects, IProject, TProject } from '../data/projects';

import 'animate.css';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectBentoItem } from './ProjectBentoItem';
import { FilterIconButton } from './FilterIconButton';
import { TTechnologies } from '../data/technologies.type';
import { TFilterTechnologies } from '../data/filterTechnologies.type';

export type TTabsState = TFilterTechnologies | 'Favorites' | 'ALL';

export const Projects = () => {
  //  const tabs: TProject[] = ['Frontend', 'Backend', 'Fullstack'];
  const tabs: TFilterTechnologies[] = ['HTML', 'Javascript', 'Typescript', 'Sergey', 'React', 'Vue', 'NextJs', 'Nuxt', 'Flutter'];
  const [tabSelected, setTabSelected] = useState<TTabsState>('ALL');
  const [projects, setProjects] = useState<IProject[]>([]);
  const [clickedFavorites, setClickedFavorites] = useState<{
    clicks: number;
    isAdded: boolean;
  }>({
    clicks: 0,
    isAdded: false,
  });
  const $containerProjects = useRef<HTMLDivElement | null>(null);
  const $favButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (tabSelected !== 'Favorites' && tabSelected !== 'ALL') {
      setProjects(dataProjects.filter((p) => p.tags.includes(tabSelected)));
    } else if (tabSelected === 'Favorites') {
      setProjects(
        dataProjects.filter((project) =>
          favoriteProjects().some((favId) => favId === project.id)
        )
      );
    } else {
      setProjects(dataProjects);
    }
  }, [tabSelected]);

  useEffect(() => {
    if (clickedFavorites.clicks > 0 && clickedFavorites.isAdded) {
      $favButton.current?.classList.remove('animate__heartBeat');
      setTimeout(() => {
        $favButton.current?.classList.add('animate__heartBeat');
        $favButton.current!.style.animationDelay = '0s';
      }, 50);
    } else if (clickedFavorites.clicks > 0 && favoriteProjects().length === 0) {
      onSelectTab('ALL', 0);
    }
  }, [clickedFavorites]);

  const onSelectTab = (tab: TTabsState, index: number) => {
    if (tab === tabSelected) return;

    // $containerProjects.current?.classList.remove('animate__fadeInLeft');
    // $containerProjects.current?.classList.remove('animate__fadeInRight');
    $containerProjects.current?.classList.add('hidden');
    if (tabSelected === 'Favorites') {
      setTimeout(() => {
        $containerProjects.current?.classList.remove('hidden');
      }, 50);
    } else if (tabSelected === 'ALL') {
      setTimeout(() => {
        $containerProjects.current?.classList.remove('hidden');
      }, 50);
    } else {
      $containerProjects.current?.classList.remove('hidden');
    }
    setTabSelected(tab);
  };

  const onShowFavoritProjects = () => {
    setProjects(
      dataProjects.filter((project) =>
        favoriteProjects().some((favId) => favId === project.id)
      )
    );
    setTabSelected('Favorites');
  };

  const listProjects = useMemo(
    () => (
      <>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 auto-rows-[240px] md:mx-auto">
          {projects.map((project, index) => (
            <ProjectBentoItem
              key={project.id}
              index={index + 1}
              project={project}
              setClickedFavorites={setClickedFavorites}
              tabSelected={tabSelected}
            />
          ))}
        </div>

        {tabSelected !== 'Favorites' && (
          <div className="flex justify-center items-center w-full py-8">
            <span
              className="text-center text-base font-bold text-secondary tracking-wider uppercase"
              style={{ wordSpacing: '4px' }}
            >
              próximamente más proyectos...
            </span>
          </div>
        )}
      </>
    ),
    [projects]
  );

  return (
    <section
      className="flex justify-center items-center relative"
      id="projects"
    >
      <div className="container h-full pt-2 pb-16 sm:pt-6 sm:pb-16 md:pt-16 md:pb-4">
        <SectionTitle title="Proyectos" />
        <SectionCard className="h-full  relative">
          <div className="h-full w-full relative">

            <div className=" flex flex-col h-full w-full pb-3">
              <TrackVisibility once>
                {({ isVisible }) => (
                  <div className="flex flex-col-reverse gap-2 justify-between md:flex-row">
                    <div
                      className={`
                      flex flex-row flex-wrap justify-start items-center 
                      
                      ${favoriteProjects().length > 0
                          ? 'mssm:my-7 mssm:gap-2.5'
                          : ''
                        } 
                      my-2
                      transition-all duration-200 ease-out
                    `}
                    >

                      <div className="flex flex-wrap gap-6 sm:gap-0 justify-center items-center mt-8 sm:mt-6 sm:mb-7 ">
                        {tabs.map((tab, index) => (

                          <FilterIconButton
                            key={`button_tab_` + index}
                            isVisible={isVisible}
                            technology={tab}
                            index={index}
                            isActive={tabSelected === tab}
                            onClick={() => onSelectTab(tab, index)}
                          />
                        ))}

                      </div>
                      <div
                        className={`
                          md:flex-shrink-0
                          flex justify-center items-center
                          ${favoriteProjects().length > 0
                            ? 'mssm:w-full w-20 h-10 '
                            : 'w-0 h-0'
                          }
                          relative md:absolute md:right-8
                          transition-all duration-200 ease-out
                        `}
                      >
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                      <button
                        className={`
                        ${tabSelected === 'ALL' ? 'border-b border-teal-300' : ''}
                        transition-all duration-200 ease-in-out
                        group
                        text-sm font-bold mxs:text-xs
                        p-2.5
                        uppercase tracking-wide 
                        `}
                        onClick={() => onSelectTab('ALL', 0)}
                      >
                        <span className="group-hover:text-teal-300">SHOW ALL</span>
                      </button>

                      <button
                        ref={$favButton}
                        onClick={onShowFavoritProjects}
                        className={`
                          fav-button-project gap-2 
                          bg-red-500 text-stone-200 
                          px-4 py-1.5 
                          ml-6 sm:ml-8
                          mssm:mb-4 mssm:mt-5 
                          ${isVisible ? 'animate__heartBeat' : ''}
                          
                          transition-all duration-200 ease-out
                        `}
                        style={{
                          animationDelay: `.${tabs.length * 2}s`,
                        }}
                      >
                        <MdFavorite fontSize={24} />
                        <span className="mxs:text-xs text-sm mssm:block font-bold uppercase">
                          favorites
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </TrackVisibility>
              <div
                className={`
                           flex-grow 
                           ${projects.length > 0 ? 'overflow-y-auto' : ''} 
                           overflow-x-hidden 
                           mt-4 sm:mt-0
                           rounded-md
                           border border-teal-700
                           shadow-lg
                        `}
              >
                <div
                  ref={$containerProjects}
                  className="animate__animated animate__faster h-full w-full"
                  style={{
                    animationDuration: '0.4s',
                  }}
                >
                  {projects.length > 0 ? (
                    listProjects
                  ) : (
                    <div
                      className="animate__animated animate__headShake flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-2xl h-full w-full text-center "
                      style={{
                        animationDelay: '0.45s',
                      }}
                    >
                      <span>No hay proyectos...</span>
                      <span>por ahora.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </section>
  );
};

/*
${
                                 favoriteProjects().length > 0
                                    ? 'mssm:h-28 mssm:mt-4 sm:my-2 '
                                    : 'my-2'
                              } 
*/
