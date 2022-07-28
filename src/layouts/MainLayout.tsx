import React from 'react';
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const MainLayout = () => {
   return (
      <div className="static h-full bg-stone-800 bg-gradient-to-b from-teal-900 via-teal-700 to-teal-900">
         <div className="relative w-full ">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
         </div>
      </div>
   );
};
