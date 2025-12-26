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

  let text = 'Frontend Engineer · UX/UI Driven · Clean Architecture & Clean Code · '
  text = text.repeat(200)

  return (
    <div className="fixed h-full w-[200vw] top-0 right-0 z-0 transform -rotate-45 break-all pointer-events-none">
      <span className="text-7xl opacity-[0.02]">
        {text}
      </span>
    </div>
  );
};
