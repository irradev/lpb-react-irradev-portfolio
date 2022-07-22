import React from 'react';
import { Banner } from '../components/Banner';
import { NavBar } from '../components/NavBar';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export const MainLayout = () => {
   return (
      <div className="static h-full bg-stone-800 bg-gradient-to-b from-teal-900 via-teal-700 to-teal-900">
         <div className="relative w-full ">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
         </div>
      </div>
   );
};
