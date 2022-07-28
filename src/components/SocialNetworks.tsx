import React from 'react';
import TrackVisibility from 'react-on-screen';
import { useMySocialNetworks } from '../hooks/useMySocialNetworks';

import logo from '../assets/img/logo.png';
import 'animate.css';

export const SocialNetworks = () => {
   const { allSocials } = useMySocialNetworks();

   return (
      <div className="flex flex-col justify-center items-center text-shadow-xs">
         <div className="mt-10 sm:mt-5 md:mt-0 mb-4">
            <a
               href="#home"
               className="flex flex-col justify-center items-center gap-2 text-3xl font-bold "
            >
               <img
                  className="rounded-full w-full max-w-lg shadow-lg hover:animate-bounce"
                  src={logo}
                  alt="irradev logo"
               />
               <span>irradev</span>
            </a>
         </div>

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
   );
};
