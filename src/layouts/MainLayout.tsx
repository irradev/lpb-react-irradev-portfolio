import React from 'react';
import { Banner } from '../components/Banner';
import { ExampleContent } from '../components/ExampleContent';
import { NavBar } from '../components/NavBar';
import { Skills } from '../components/Skills';

export const MainLayout = () => {
   return (
      <div className="static h-full bg-stone-800 bg-gradient-to-b from-stone-800 via-teal-900 to-stone-900">
         <div className="relative w-full ">
            <NavBar />
            <div className="sm:pt-14 md:pt-0 pb-14 h-full ">
               <Banner />
               <Skills />
               <ExampleContent />
            </div>
         </div>
      </div>
   );
};
