import React, { useEffect, useMemo, useRef, useState } from 'react';
import TrackVisibility from 'react-on-screen';
import { favoriteProjects } from '../utils';
import { SectionCard } from './ui/SectionCard';
import { CardProject } from './CardProject';
import { TabButton } from './TabButton';

import { MdFavorite } from 'react-icons/md';

import { projects as dataProjects, IProject, TProject } from '../data/projects';

import 'animate.css';

export type TTabsState = TProject | 'Favorites';

export const Projects = () => {
   const tabs: TProject[] = ['Frontend', 'Backend', 'Fullstack'];
   const [tabSelected, setTabSelected] = useState<TTabsState>('Frontend');
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
      if (tabSelected !== 'Favorites') {
         setProjects(dataProjects.filter((p) => p.type === tabSelected));
      }
   }, [tabSelected]);

   useEffect(() => {
      if (clickedFavorites.clicks > 0 && clickedFavorites.isAdded) {
         $favButton.current?.classList.remove('animate__heartBeat');
         setTimeout(() => {
            $favButton.current?.classList.add('animate__heartBeat');
            $favButton.current!.style.animationDelay = '0s';
         }, 50);
      } else if (
         clickedFavorites.clicks > 0 &&
         favoriteProjects().length === 0
      ) {
         onSelectTab('Frontend', 0);
      }
   }, [clickedFavorites]);

   const onSelectTab = (tab: TProject, index: number) => {
      if (tab === tabSelected) return;

      $containerProjects.current?.classList.remove('animate__fadeInLeft');
      $containerProjects.current?.classList.remove('animate__fadeInRight');
      $containerProjects.current?.classList.add('hidden');
      if (tabSelected === 'Favorites') {
         setTimeout(() => {
            $containerProjects.current?.classList.remove('hidden');
            $containerProjects.current?.classList.add('animate__fadeInLeft');
         }, 50);
      } else {
         if (index > tabs.indexOf(tabSelected)) {
            setTimeout(() => {
               $containerProjects.current?.classList.remove('hidden');
               $containerProjects.current?.classList.add(
                  'animate__fadeInRight'
               );
            }, 50);
         } else if (index < tabs.indexOf(tabSelected)) {
            setTimeout(() => {
               $containerProjects.current?.classList.remove('hidden');
               $containerProjects.current?.classList.add('animate__fadeInLeft');
            }, 50);
         }
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 rounded-md md:max-w-2xl md:mx-auto lg:max-w-none">
               {projects.map((project, index) => (
                  <CardProject
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
         className="flex justify-center items-center h-screen relative"
         id="projects"
      >
         <div className="container h-full pt-2 pb-16 sm:pt-6 sm:pb-16 md:pt-16 md:pb-4">
            <SectionCard className="h-full  relative">
               <div className=" h-full w-full relative">
                  <h2 className="flex-srhink-0 text-xl text-center font-bold uppercase">
                     Proyectos
                  </h2>
                  <div className=" flex flex-col-reverse sm:flex-col h-full w-full pb-3 sm:pb-6">
                     <TrackVisibility once>
                        {({ isVisible }) => (
                           <div
                              className={`
                              flex-shrink-0 
                              flex flex-row mssm:flex-col justify-center items-center 
                              h-16 
                              ${
                                 favoriteProjects().length > 0
                                    ? 'mssm:my-7 mssm:gap-2.5'
                                    : ''
                              } 
                              my-2
                              transition-all duration-200 ease-out
                           `}
                           >
                              <div className="md:flex-grow flex justify-center items-center">
                                 {tabs.map((tab, index) => (
                                    <TabButton
                                       key={`button_tab_` + index}
                                       isVisible={isVisible}
                                       title={tab}
                                       index={index}
                                       totalTabs={tabs.length - 1}
                                       isActive={tabSelected === tab}
                                       onClick={() => onSelectTab(tab, index)}
                                    />
                                 ))}
                              </div>
                              <div
                                 className={`
                                    md:flex-shrink-0
                                    flex justify-center items-center
                                    ${
                                       favoriteProjects().length > 0
                                          ? 'mssm:w-full w-20 h-10 '
                                          : 'w-0 h-0'
                                    }
                                    
                                    relative md:absolute md:right-8
                                    transition-all duration-200 ease-out
                                 `}
                              >
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
                                    ${
                                       favoriteProjects().length > 0
                                          ? 'opacity-100'
                                          : 'opacity-0'
                                    }
                                    transition-all duration-200 ease-out
                                 `}
                                    style={{
                                       animationDelay: `.${tabs.length * 2}s`,
                                    }}
                                 >
                                    <MdFavorite fontSize={24} />
                                    <span className="mxs:text-xs text-sm mssm:block hidden font-bold uppercase">
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
                           ${projects.length > 0 ? 'overflow-y-scroll' : ''} 
                           overflow-x-hidden 
                           mt-4 sm:mt-0
                           rounded-md
                           border border-teal-700
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
