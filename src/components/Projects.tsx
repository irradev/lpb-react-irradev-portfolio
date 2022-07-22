import React, { useEffect, useMemo, useState } from 'react';
import { SectionCard } from './ui/SectionCard';
import { projects as dataProjects, IProject, TProject } from '../data/projects';
import { CardProject } from './CardProject';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
   const tabs: TProject[] = ['Frontend', 'Backend', 'Fullstack'];

   const [tabSelected, setTabSelected] = useState<TProject>('Frontend');

   const [projects, setProjects] = useState<IProject[]>([]);

   useEffect(() => {
      setProjects(dataProjects.filter((p) => p.type === tabSelected));
   }, [tabSelected]);

   const listProjects = useMemo(
      () =>
         projects.map((project) => (
            <CardProject key={project.id} project={project} />
         )),
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
                  <h2 className="flex-srhink-0 text-xl text-center uppercase">
                     Proyectos
                  </h2>
                  <div className=" flex flex-col-reverse sm:flex-col h-full w-full pb-3 sm:pb-6">
                     <TrackVisibility>
                        {({ isVisible }) => (
                           <div className="flex-shrink-0 flex justify-around sm:justify-center items-center sm:gap-10 h-16 my-2">
                              <>
                                 {tabs.map((tab, index) => (
                                    <button
                                       className={`
                                          bg-teal-700 
                                          text-sm font-bold mxs:text-xs
                                          border border-teal-500 
                                          px-3 py-2 mxs:px-1 msx:py-1
                                          uppercase tracking-wide 
                                          rounded-md shadow-md shadow-teal-700
                                          ${
                                             isVisible
                                                ? 'animate__animated animate__bounceIn'
                                                : ''
                                          }
                                    `}
                                       onClick={() => setTabSelected(tab)}
                                       style={{
                                          animationDelay: `${index / 6}s`,
                                       }}
                                    >
                                       {tab}
                                    </button>
                                 ))}
                              </>
                           </div>
                        )}
                     </TrackVisibility>
                     <div className="flex-grow bg-red-300 overflow-y-scroll mt-4 sm:mt-0">
                        {projects.length > 0 ? (
                           listProjects
                        ) : (
                           <div className="animate__animated animate__headShake flex justify-center items-center h-full w-full">
                              No hay proyectos... por ahora.
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </SectionCard>
         </div>
      </section>
   );
};
