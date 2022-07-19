import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';

import {
   BsGithub,
   BsLinkedin,
   BsTwitter,
   BsJournalCode,
   BsCodeSlash,
} from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BiSend } from 'react-icons/bi';
import { FiFolder } from 'react-icons/fi';

export const NavBar = () => {
   return (
      <div className="flex justify-center items-center px-1 w-full h-14  backdrop-blur-sm  fixed bottom-0 sm:sticky sm:top-0">
         <div className="flex justify-between items-center  sm:container w-full ">
            <div className="hidden sm:block flex-shrink-0">
               <a href="/#" className="hidden sm:block text-3xl font-bold">
                  irradev
               </a>
               <span className="flex flex-col justify-center items-center p-1 pr-2 sm:hidden">
                  <RiMenuUnfoldFill className="text-3xl sm:hidden" />
               </span>
            </div>
            <div className="flex-grow sm:flex-grow-0 flex justify-around items-center text-xs sm:gap-8 sm:text-lg">
               <div className="flex-grow justify-around gap-1 sm:flex-grow-0 flex sm:gap-4 ">
                  <a
                     href="/#"
                     className="flex flex-col justify-center items-center"
                  >
                     <AiOutlineHome className="text-3xl sm:hidden" />
                     <span>Home</span>
                  </a>
                  <a
                     href="#"
                     className="flex flex-col justify-center items-center"
                  >
                     <BsCodeSlash className="text-3xl sm:hidden" />
                     <span>Skills</span>
                  </a>
                  <a
                     href="#"
                     className="flex flex-col justify-center items-center"
                  >
                     <FiFolder className="text-3xl sm:hidden" />
                     <span>Proyectos</span>
                  </a>
                  {/* <a
                     href="#"
                     className="flex flex-col justify-center items-center sm:hidden"
                  >
                     <BiSend className="text-3xl sm:hidden" />
                     <span>Contáctame</span>
                  </a> */}
               </div>
               <div className="hidden md:flex gap-4 text-2xl ">
                  <a href="https://github.com/irradev">
                     <BsGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/irradev/">
                     <BsLinkedin />
                  </a>
                  <a href="https://twitter.com/irradev">
                     <BsTwitter />
                  </a>
               </div>
               <a
                  href="#contacto"
                  className="flex mxs:flex-col justify-center gap-1 items-center border-2 border-primary mr-3 px-3 py-2 mxs:mr-0 mxs:py-0 sm:mr-0 sm:flex-row sm:px-7 sm:py-2 sm:h-11 sm:uppercase sm:cursor-pointer "
               >
                  <BiSend className="text-2xl sm:hidden" />
                  <span className="mxs:text-xs text-base sm:text-lg">
                     ¡Contáctame!
                  </span>
               </a>
            </div>
         </div>
         <BgOpacityEffect />
      </div>
   );
};

const BgOpacityEffect = () => {
   return (
      <div className="w-full h-14  fixed bottom-0 sm:px-4 sm:absolute sm:top-0 -z-10 bg-gradient-to-l from-teal-900 opacity-80"></div>
   );
};