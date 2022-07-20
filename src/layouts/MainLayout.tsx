import React from 'react';
import { Banner } from '../components/Banner';
import { ExampleContent } from '../components/ExampleContent';
import { NavBar } from '../components/NavBar';

export const MainLayout = () => {
   return (
      <div className="fixed sm:static sm:h-full bg-stone-800 bg-gradient-to-b from-stone-800 to-teal-900">
         <div className="relative w-full ">
            <NavBar />
            <div className="pb-14 sm:pb-16 overflow-y-scroll sm:overflow-hidden h-screen sm:h-full ">
               <Banner />
               <ExampleContent />
            </div>
         </div>
      </div>
   );
};
