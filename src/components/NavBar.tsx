import {
  AnchorHTMLAttributes,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useMySocialNetworks } from '../hooks/useMySocialNetworks';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation and Link

import { BsCodeSlash } from 'react-icons/bs';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BiSend } from 'react-icons/bi';
import { FiFolder } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
// Link was already imported

import logo from '../assets/img/logo.png';

// Updated TtargetId to include string for route paths
type TtargetId = '#home' | '#skills' | '#projects' | string; 

interface INavLink {
  name: string;
  icon?: ReactElement;
  targetId: TtargetId; // Now can be a hash or a path
  isActive: boolean;
  isRouteLink?: boolean; // Optional flag to explicitly mark route links
}

export const NavBar = () => {
  const { allSocials } = useMySocialNetworks();

  const location = useLocation(); // Add useLocation hook
  const { allSocials } = useMySocialNetworks();

  const navLinksInit: INavLink[] = [
    {
      name: 'Home',
      icon: <AiOutlineHome className="text-3xl sm:hidden" />,
      targetId: '/', // Changed to route path
      isActive: false,
      isRouteLink: true,
    },
    {
      name: 'Proyectos',
      icon: <FiFolder className="text-3xl sm:hidden" />,
      targetId: '/projects',
      isActive: false,
      isRouteLink: true,
    },
    {
      name: 'Viewport', // Added Viewport to navLinks
      icon: <BsCodeSlash className="text-3xl sm:hidden" />,
      targetId: '/what-is-my-viewport',
      isActive: false,
      isRouteLink: true,
    }
  ];

  const otherNavLinksClickedInit = {
    logo: false, // Corresponds to '/'
    contact: false, // Corresponds to '/contact'
  };

  const [navLinks, setNavLinks] = useState<INavLink[]>(navLinksInit);
  const [isClickedOtherNavLinks, setIsClickedOtherNavLinks] = useState(
    otherNavLinksClickedInit
  );
  // $navLinkElements ref might still be useful for hash-scrolling logic if any hash links remain
  const $navLinkElements = useRef<any[]>([]); 

  // Effect to update active link based on location.pathname
  useEffect(() => {
    const currentPath = location.pathname;
    setNavLinks(prevNavLinks =>
      prevNavLinks.map(link => ({
        ...link,
        // Only set isActive true if it's a route link and matches current path
        isActive: link.isRouteLink ? link.targetId === currentPath : link.isActive 
      }))
    );
    setIsClickedOtherNavLinks({
      logo: currentPath === '/',
      contact: currentPath === '/contact',
    });

    // If there's a hash, handle scrolling for on-page links (e.g. from HomePage)
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Optionally, if hash links within pages should also highlight a nav item (e.g. "Home" for /#some-section)
        // This part might need more specific logic if combining page routes with in-page hashes
        if (currentPath === '/') { // Example: if on home page and hash exists
             setNavLinks(prev => prev.map(l => ({...l, isActive: l.targetId === '/' || l.targetId === hash})));
        }
      }
    }

  }, [location.pathname, location.hash]); // Rerun when path or hash changes

  // Simplified onClick handler for navigation items
  const handleNavLinkClick = (targetId: TtargetId) => {
    if (typeof targetId === 'string' && targetId.startsWith('#')) {
      // Handle hash link scrolling if needed (usually handled by browser, but can add smooth scroll here)
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Update active state for hash links immediately (useEffect will catch up for routes)
      setNavLinks(prevNavLinks =>
        prevNavLinks.map(link => ({
          ...link,
          isActive: link.targetId === targetId
        }))
      );
      setIsClickedOtherNavLinks(otherNavLinksClickedInit);
    }
    // For route links (<Link to="...">), navigation is handled by react-router-dom.
    // The useEffect hook listening to location.pathname will update isActive state.
    // We just need to ensure other visual cues are reset if necessary.
    if (typeof targetId === 'string' && !targetId.startsWith('#')) {
        // Reset specific visual cues if a route link is clicked, let useEffect handle true active state
        setIsClickedOtherNavLinks(otherNavLinksClickedInit); 
    }
  };
  
  // Removed old useEffect for hash links on initial load, as new useEffect covers it.

  return (
    <nav className="flex justify-center items-center px-1 w-full h-14  backdrop-blur-sm  fixed bottom-0 z-30 sm:sticky sm:top-0">
      <div className="flex justify-between items-center  sm:container w-full ">
        <div className="hidden sm:block flex-shrink-0">
          <Link
            to="/" 
            onClick={() => handleNavLinkClick('/')} // Updated onClick
            className={`
                     hidden sm:flex justify-center items-center gap-2 text-3xl font-bold
                     hover:
                     ${
                       isClickedOtherNavLinks.logo
                         ? 'animate__animated animate__rubberBand '
                         : ''
                     }
                  `}
          >
            {/* <img
                     className="rounded-full w-12"
                     src={logo}
                     alt="irradev logo"
                  /> */}
            <span>irradev</span>
          </Link>
        </div>
        <div className="flex-grow sm:flex-grow-0 flex justify-around items-center text-xs sm:gap-8 sm:text-lg">
          <div className="flex-grow justify-around gap-1 sm:flex-grow-0 flex sm:gap-4 font-medium sm:font-normal">
            {navLinks.map((navLink, index) => {
              const commonClasses = "nav-link flex flex-col justify-center items-center sm:flex-row sm:gap-1";
              const activeClasses = navLink.isActive ? 'animate__animated animate__rubberBand nav-link-active' : '';
              
              if (navLink.isRouteLink) {
                return (
                  <Link
                    key={index + '-' + navLink.name}
                    to={navLink.targetId}
                    className={`${commonClasses} ${activeClasses}`}
                    onClick={() => handleNavLinkClick(navLink.targetId)}
                  >
                    {navLink.icon}
                    <span className="sm:inline">{navLink.name}</span>
                  </Link>
                );
              }
              // Logic for hash links (if any remain, e.g. Home if it scrolls)
              return (
                <a
                  key={index + '-' + navLink.name}
                  ref={($el) => {
                    if (navLink.targetId.startsWith('#')) { // Only assign ref for hash links if needed
                      $navLinkElements.current![navLink.targetId as any] = $el;
                    }
                  }}
                  onClick={() => handleNavLinkClick(navLink.targetId)}
                  href={navLink.targetId} // Keep href for hash links for direct navigation/SEO
                  className={`
                            ${activeClasses} ${isClickedOtherNavLinks.logo && navLink.targetId === '/' ? 'nav-link-active' : ''}
                          `}
                        >
                          {navLink.icon}
                          <span className="sm:inline">{navLink.name}</span>
                        </a>
                      );
                    })}
                  </div>
                  <div className="hidden md:flex gap-4 text-2xl ">
                    {allSocials.map((social, index) => (
                      <a
                        key={index + '-' + 'social-link'}
                        className="nav-link"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => handleNavLinkClick('/contact')} // Updated onClick
                    className={`nav-link-contact ${ 
                      isClickedOtherNavLinks.contact 
                ? 'animate__animated animate__rubberBand nav-link-contact-active'
                : ''
            }`}
          >
            <BiSend className="text-2xl sm:hidden" />
            <span className="mxs:text-xs text-base sm:text-lg font-medium">
              ¡Contáctame!
            </span>
          </Link>
        </div>
      </div>
      <BgOpacityEffect />
    </nav>
  );
};

const BgOpacityEffect = () => {
  return (
    <div className="w-full h-14  fixed bottom-0 sm:px-4 sm:absolute sm:top-0 -z-10 bg-gradient-to-l from-teal-900 opacity-80"></div>
  );
};

/*

Logo mini:
<img
   className="rounded-lg w-11  sm:hidden"
   src={logo}
   alt="irradev logo"
/> 

Contactame navLink:
<a
   href="#"
   className="flex flex-col justify-center items-center sm:hidden"
>
   <BiSend className="text-3xl sm:hidden" />
   <span>Contáctame</span>
</a>

Menu icon:
<span className="flex flex-col justify-center items-center p-1 pr-2 sm:hidden">
   <RiMenuUnfoldFill className="text-3xl sm:hidden" />
</span>
*/
