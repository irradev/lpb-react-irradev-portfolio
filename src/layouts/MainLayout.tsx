import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
// Banner, Skills, Projects, Contact will be moved to a HomePage component later
import { Footer } from '../components/Footer';

export const MainLayout = () => {
  return (
    <div className="static h-full bg-stone-800 bg-gradient-to-b from-teal-900 via-teal-700 to-teal-900">
      <div className="relative w-full ">
        <NavBar />
        <main> {/* Added main semantic tag for page content */}
          <Outlet /> {/* Child routes will render here */}
        </main>
        {/* Banner, Skills, Projects, Contact have been removed as they are page-specific content, not layout content.
            They should be part of a component rendered by a specific route via the Outlet (e.g. a HomePage). 
            Skills was already commented out.
        */}
        <Footer />
      </div>
    </div>
  );
};
