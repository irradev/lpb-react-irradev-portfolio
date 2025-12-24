import TrackVisibility from 'react-on-screen';
import { useMySocialNetworks } from '../hooks/useMySocialNetworks';

import logo from '../assets/img/logo.png';
// import irradevPurpleContact from '../assets/img/irradev_purple_contact_tiny.png';
import 'animate.css';

export const SocialNetworks = () => {
  const { allSocials } = useMySocialNetworks();

  return (
    <div className="flex flex-col sm:flex-col justify-center items-center w-full md:w-3/6 text-shadow-xs">
      <div className="mt-5 sm:mb-4">
        <TrackVisibility >
          {({ isVisible }) => (
            <h2 className={`text-secondary mxs:text-xl text-2xl font-bold w-full text-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
              {' '}
              Escríbeme a:
            </h2>
          )}
        </TrackVisibility>
        <TrackVisibility >
          {({ isVisible }) => (
            <a
              href="mailto:israeldevcorel@gmail.com"
              target="_blank"
              className={`flex flex-col justify-center items-center gap-2 ${isVisible ? 'animate__animated animate__fadeInUp ' : ''} `}
              style={{
                animationDelay: '1.2s',
              }}
            >
              <span className="mxs:text-2xl text-3xl font-bold hover:scale-125 hover:text-amber-300 transition-all-300-eio">
                israeldevcorel@gmail.com
              </span>
              {/* <img
                className="rounded-full w-44 shadow-lg border-2 border-transparent hover:scale-110  hover:shadow-amber-400 hover:border-amber-400 transition-all-300-eio"
                src={irradevPurpleContact}
                alt="irradev logo"
              /> */}
            </a>
          )}
        </TrackVisibility>
      </div>
      <div className="mt-10 sm:mt-8 w-full">
        <TrackVisibility >
          {({ isVisible }) => (
            <h2 className={`text-secondary mxs:text-xl text-2xl font-bold w-full text-center ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
              style={{
                animationDelay: '1.4s',
              }}>
              {' '}
              Te agradecería darme un{' '}
              <span className="text-lg font-medium uppercase tracking-wide">
                follow
              </span>{' '}
            </h2>
          )}
        </TrackVisibility>
        <div className="w-full">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className="flex justify-evenly items-center w-full mt-1">
                {allSocials.map((social, index) => (
                  <a
                    key={index + '-' + social.name}
                    className={`
                                 flex flex-col justify-center items-center gap-1 
                                 mxs:text-4xl text-5xl my-2 
                                 ${isVisible
                        ? 'opacity-100 animate__animated animate__bounceIn '
                        : 'opacity-0'
                      }
                                 hover:text-amber-400 
                                 mxs:hover:text-5xl hover:text-7xl transition-all duration-300 ease-out
                                 h-28 w-28
                              `}
                    href={social.url}
                    target="_blank"
                    style={{
                      animationDelay: `${1.8 + (index / 8)}s`,
                    }}
                  >
                    {social.icon}
                    <span className="mxs:text-base text-lg font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};
