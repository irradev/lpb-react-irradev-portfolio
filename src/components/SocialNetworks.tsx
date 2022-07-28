import React from 'react';
import { useMySocialNetworks } from '../hooks/useMySocialNetworks';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const SocialNetworks = () => {
   const { allSocials } = useMySocialNetworks();

   return (
      <div className="flex flex-col justify-center items-center text-shadow-xs">
         <h2 className="text-secondary text-2xl font-bold">
            Dame un{' '}
            <span className="text-lg font-medium uppercase tracking-wide">
               follow
            </span>{' '}
            en mis redes sociales
         </h2>
         <div className="w-full">
            <TrackVisibility once={true}>
               {({ isVisible }) => (
                  <div className="flex justify-evenly items-center w-full mt-8">
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
