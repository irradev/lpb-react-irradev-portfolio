import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div className="flex flex-col justify-start h-screen relative w-full ">
      <div className="flex-grow">
        <NavBar />
        <Outlet />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};
