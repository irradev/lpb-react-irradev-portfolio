import {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useMySocialNetworks } from '../hooks/useMySocialNetworks';

import { BiSend } from 'react-icons/bi';
import { FiFolder } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router';

type TtargetId = 'home' | 'projects' | 'contact';

interface INavLink {
  name: string;
  icon?: ReactElement;
  targetId: TtargetId;
  isActive: boolean;
}

export const NavBar = () => {
  const { allSocials } = useMySocialNetworks();

  const navLinksInit: INavLink[] = [
    {
      name: 'Home',
      icon: <AiOutlineHome className="text-3xl sm:hidden" />,
      targetId: 'home',
      isActive: false,
    },
    {
      name: 'Proyectos',
      icon: <FiFolder className="text-3xl sm:hidden" />,
      targetId: 'projects',
      isActive: false,
    },
    {
      name: 'Contacto',
      icon: <BiSend className="text-3xl sm:hidden" />,
      targetId: 'contact',
      isActive: false,
    },
  ];

  const otherNavLinksClickedInit = {
    logo: false,
    contact: false,
  };

  const [navLinks, setNavLinks] = useState<INavLink[]>(navLinksInit);
  const [isClickedOtherNavLinks, setIsClickedOtherNavLinks] = useState(
    otherNavLinksClickedInit
  );
  const $navLinkElements = useRef<any[]>([]);

  const setActiveNavLink = (targetId: string) => {
    if (targetId === 'logo' || targetId === 'contact') {
      setIsClickedOtherNavLinks({
        ...otherNavLinksClickedInit,
        [targetId]: true,
      });
    } else {
      setIsClickedOtherNavLinks(otherNavLinksClickedInit);
    }

    setNavLinks((prevNavLinks) =>
      prevNavLinks.map((navLink) => {
        if (navLink.targetId === targetId) navLink.isActive = true;
        else navLink.isActive = false;

        return navLink;
      })
    );
  };

  const handleClickNavLink = (targetId: string) => {
    setActiveNavLink(targetId);
    setTimeout(() => {
      document.getElementById(targetId)
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  };

  useEffect(() => {
    let hashLink = window.location.hash;
    let $navLink = $navLinkElements.current[hashLink as any];
    if ($navLink) $navLinkElements.current[hashLink as any].click();
  }, []);

  return (
    <nav className="flex justify-center items-center px-1 w-full h-16 sm:h-14 backdrop-blur-sm fixed bottom-4 z-30 max-w-[95%] sm:max-w-[100%] left-1/2 transform -translate-x-1/2 sm:sticky sm:top-0 sm:left-0 sm:transform sm:translate-x-0 bg-stone-100 text-slate-800 sm:bg-transparent sm:text-white rounded-2xl">
      <div className="flex justify-between items-center sm:container w-full ">
        <div className="hidden sm:block flex-shrink-0">
          <Link
            onClick={() => handleClickNavLink('logo')}
            to="/"
            className={`
                     hidden sm:flex justify-center items-center gap-2 text-3xl font-bold
                     hover:
                     ${isClickedOtherNavLinks.logo
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
          <div className="flex-grow justify-evenly gap-1 sm:flex-grow-0 flex sm:gap-4 font-medium sm:font-normal">
            {navLinks.map((navLink, index) => (
              <Link
                key={index + '-' + navLink.name}
                ref={($el) =>
                  ($navLinkElements.current![navLink.targetId as any] = $el)
                }
                onClick={() => handleClickNavLink(navLink.targetId)}
                to="/"
                className={`
                  nav-link 
                  w-full max-w-[150px] sm:w-auto
                  ${navLink.isActive
                    ? 'animate__animated animate__rubberBand nav-link-active'
                    : isClickedOtherNavLinks.logo &&
                      navLink.targetId === 'home'
                      ? 'nav-link-active'
                      : ''
                  }
                        `}
              >
                {navLink.icon}
                <span className="sm:inline">{navLink.name}</span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4 text-2xl ">
            {allSocials.map((social, index) => (
              <a
                key={index + '-' + 'social-link'}
                className="nav-link"
                href={social.url}
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <Link
            onClick={() => handleClickNavLink('contact')}
            to="/"
            className={`nav-link-contact hidden sm:flex ${isClickedOtherNavLinks.contact
              ? 'animate__animated animate__rubberBand nav-link-contact-active'
              : ''
              }`}
          >
            <BiSend className="text-2xl hidden sm:block mr-2" />
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
    <div className="w-full fixed bottom-0 sm:px-4 sm:absolute sm:top-0 -z-10 bg-gradient-to-l from-transparent via-teal-900/60 opacity-80"></div>
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
