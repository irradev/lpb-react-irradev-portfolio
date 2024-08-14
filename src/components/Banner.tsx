import React from 'react';
import TrackVisibility from 'react-on-screen';
import { DynamicText } from './tools/DynamicText';
import graphic from '../assets/img/graphic_banner.png';
import 'animate.css';

export const Banner = () => {
  const toRotate = [
    'Tec. Ingeniería de Software',
    'Desarrollador Web Frontend',
    'Amante del Pixel Art <3',
  ];

  return (
    <section
      className="container banner "
      id="home"
    >
      <span className="text-6xl sm:text-9xl w-full text-center sm:mt-7 pt-4 block">
        ¡Hola!
      </span>
      <div className=" flex justify-center items-center sm:mt-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
          <div className="flex items-center justify-center text-center md:text-left ">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__bounceIn' : ''
                  }
                >
                  <h1 className="flex justify-center flex-col gap-4 font-bold mt-8 sm:mt-0 ">
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
                </div>
              )}
            </TrackVisibility>
          </div>
          <p className="text-secondary text-lg sm:text-xl pb-0 pt-4  mxs:pt-3 text-shadow-xs mb-8 sm:mb-0">
            Del diseño a la funcionalidad. Transformo tus conceptos en
            aplicaciones web escalables utilizando las últimas tecnologías y
            mejores prácticas del desarrollo frontend.
          </p>
          {/* <div className="mx-auto md:mr-0 w-full max-w-xs md:max-w-md">
            <img
              className="updown-animation"
              src={graphic}
              alt="Code Exploring Graphic"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
