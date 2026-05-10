import { NavBar } from '../components/NavBar';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router';
import { BackgroundBigTexts } from '../components/ui/BackgroundBigTexts';

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
      <BackgroundBigTexts />
    </>
  );
};



