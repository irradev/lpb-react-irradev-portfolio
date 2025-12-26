import { NavBar } from '../components/NavBar';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router';
import { useEffect } from 'react';

export const MainLayout = () => {
  return (
    <>
      <div id="main-layout" className="flex flex-col justify-start h-screen relative w-full ">
        <div className="flex-grow bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900">
          <NavBar />
          <Outlet />
        </div>
        <Contact />
        <Footer />
      </div>
      <BgTexts />
    </>
  );
};


const BgTexts = () => {

  const titles = ['Frontend Engineer', 'UX/UI Driven', 'Clean Architecture & Clean Code', 'Versatile & Adaptive', 'Passionate & Detail-Oriented', 'Always Learning']

  return (
    <div className="fixed flex flex-wrap justify-center items-center h-full w-[200vw] -top-16 -right-16 z-0 transform -rotate-45 pointer-events-none">
      {Array.from({ length: 200 }).map((_, index) => {
        const randomIndex = Math.floor(Math.random() * titles.length)
        return (
          <>
            <span key={index} className="text-7xl opacity-[0.02] inline-block py-12 mr-8">
              {titles[randomIndex]}
            </span>
            <span className="text-7xl opacity-[0.02] inline-block py-12 mr-8">
              ·
            </span>
          </>
        )
      })}
    </div>
  );
};
