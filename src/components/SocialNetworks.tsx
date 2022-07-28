import React from 'react';
import TrackVisibility from 'react-on-screen';
import { useMySocialNetworks } from '../hooks/useMySocialNetworks';

import logo from '../assets/img/logo.png';
import 'animate.css';

export const SocialNetworks = () => {
   const { allSocials } = useMySocialNetworks();

   return (
      <div className="flex flex-col-reverse sm:flex-col justify-center items-center w-full md:w-3/6 text-shadow-xs">
         <div className="mt-5 sm:mb-4">
            <a
               href="#home"
               className="flex flex-col justify-center items-center gap-2 text-3xl font-bold "
            >
               <img
                  className="rounded-full w-full shadow-lg border-2 border-transparent hover:scale-110 hover:shadow-amber-400 hover:border-amber-400 transition-all-300-eio"
                  src={logo}
                  alt="irradev logo"
               />
               <span className="hover:scale-125 hover:text-amber-300 transition-all-300-eio">
                  irradev
               </span>
            </a>
         </div>

         <div className="mt-10 sm:mt-0">
            <h2 className="text-secondary text-2xl font-bold w-full text-center">
               Te agradecería darme un{' '}
               <span className="text-lg font-medium uppercase tracking-wide">
                  follow
               </span>{' '}
            </h2>
            <div className="w-full">
               <TrackVisibility once={true}>
                  {({ isVisible }) => (
                     <div className="flex justify-evenly items-center w-full mt-1">
                        {allSocials.map((social, index) => (
                           <a
                              className={`
                           flex flex-col justify-center items-center gap-1 
                           text-5xl my-2 
                           ${
                              isVisible
                                 ? 'opacity-100 animate__animated animate__bounceIn '
                                 : 'opacity-0'
                           }
                           hover:text-amber-400 
                           hover:text-7xl transition-all duration-300 ease-out
                           h-28 w-28
                        `}
                              href={social.url}
                              target="_blank"
                              style={{
                                 animationDelay: `${index / 8}s`,
                              }}
                           >
                              {social.icon}
                              <span className="text-lg font-medium">
                                 {social.name}
                              </span>
                           </a>
                        ))}
                     </div>
                  )}
               </TrackVisibility>
            </div>
         </div>
      </div>
   );
};
