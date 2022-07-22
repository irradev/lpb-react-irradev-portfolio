import React from 'react';
import TrackVisibility from 'react-on-screen';
import { DynamicText } from './tools/DynamicText';
import graphic from '../assets/img/graphic_banner.png';
import 'animate.css';

export const Banner = () => {
   const toRotate = [
      'Tec. Ingeniería de Software',
      'Desarrollador Web',
      'Especialista en React',
      'Investigador UX',
      'Amante del Pixel Art <3',
   ];

   return (
      <section className="banner " id="home">
         <div className="container flex justify-center items-center h-screen pb-12 sm:pb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
               <div className="flex items-center text-center md:text-left">
                  <TrackVisibility>
                     {({ isVisible }) => (
                        <div
                           className={
                              isVisible
                                 ? 'animate__animated animate__bounceIn'
                                 : ''
                           }
                        >
                           <h1 className="flex justify-center flex-col gap-4 font-bold mt-8 sm:mt-0 ">
                              <span className="text-3xl sm:text-4xl">
                                 ¡Hola!
                              </span>
                              <span className="text-4xl mxs:text-2xl sm:text-5xl">
                                 Soy Israel Vázquez
                              </span>
                              <div className="flex justify-center md:justify-start items-center w-full text-2xl h-12 sm:text-3xl mxs:text-xl">
                                 <DynamicText
                                    isVisible={isVisible}
                                    toRotate={toRotate}
                                 />{' '}
                              </div>
                           </h1>
                           <p className="text-secondary text-lg sm:text-xl pb-0 pt-4  mxs:pt-3">
                              Del diseño a la funcionalidad. Transformo tus
                              ideas en aplicaciones web escalables con la
                              tecnología de ¡React!
                           </p>
                        </div>
                     )}
                  </TrackVisibility>
               </div>
               <div className="mx-auto md:mr-0 w-full max-w-xs md:max-w-md">
                  <img
                     className="updown-animation"
                     src={graphic}
                     alt="Code Exploring Graphic"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
