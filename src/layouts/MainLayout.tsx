import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className="static h-full bg-stone-800 bg-gradient-to-b from-slate-900 via-teal-900  to-slate-900">
      <div className="relative w-full ">
        <NavBar />
        <div className="flex flex-col justify-evenly h-screen">
          <Banner />
          <Skills />
        </div>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
