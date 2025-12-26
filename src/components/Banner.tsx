import React from 'react';
import TrackVisibility from 'react-on-screen';
import { DynamicText } from './tools/DynamicText';
import graphic from '../assets/img/graphic_banner.png';
import irradev from '../assets/img/irradev_amber.png';
import 'animate.css';

export const Banner = () => {
  const toRotate = [
    'Frontend Engineer',
    'UX/UI Driven',
    'Clean Arquitecture & Clean Code',
  ];

  return (
    <section
      className="container banner "
      id="home"
    >
      <span className="text-5xl md:text-8xl w-full text-center sm:mt-7 pt-4 block text-secondary opacity-50">
        ¡Hola!
      </span>
      <div className=" flex flex-col md:flex-row-reverse justify-center items-center sm:mt-14 ">
        <div className="mx-auto md:mr-0 w-full max-w-xs md:max-w-md z-20">
          <img
            className="mt-6 sm:mt-0 rounded-full shadow-lg border-2 breathing-animation"
            src={irradev}
            alt="irradev"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center md:justify-start  ">
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
          <p className="text-secondary text-lg sm:text-xl pt-4  mxs:pt-3 text-shadow-xs mb-8 sm:mb-0 pr-0 md:pr-6">
            Desarrollo interfaces web claras, funcionales y escalables, aplicando buenas prácticas, arquitectura limpia y enfoque en experiencia de usuario.
            <br /><br />
            Este sitio es un laboratorio personal de prácticas profesionales, pruebas técnicas y proyectos reales.
          </p>
        </div>
      </div>
    </section>
  );
};
