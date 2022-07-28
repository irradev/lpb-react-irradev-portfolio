import React, { ReactElement } from 'react';

import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

type TSocialNetworks =
   | 'LinkedIn'
   | 'Github'
   | 'Twitter'
   | 'Facebook'
   | 'Twitch'
   | 'Youtube';

interface SocialNework {
   name: TSocialNetworks;
   icon: ReactElement;
   url: string;
}

export const useMySocialNetworks = () => {
   const allSocials: SocialNework[] = [
      {
         name: 'Github',
         icon: <BsGithub />,
         url: 'https://github.com/irradev',
      },
      {
         name: 'LinkedIn',
         icon: <BsLinkedin />,
         url: 'https://www.linkedin.com/in/irradev/',
      },
      {
         name: 'Twitter',
         icon: <BsTwitter />,
         url: 'https://twitter.com/irradev',
      },
   ];

   return {
      allSocials,
   };
};
