import React, { FC } from 'react';
import { TProject } from '../data/projects';

interface TabButtonProps {
   isVisible: boolean;
   title: TProject;
   index: number;
   totalTabs: number;
   isActive: boolean;
   onClick: () => void;
}

export const TabButton: FC<TabButtonProps> = ({
   isVisible,
   title,
   index,
   totalTabs,
   isActive,
   onClick,
}) => {
   let classNames = '';
   if (index === 0) {
      classNames = 'rounded-l-full';
   } else if (index === totalTabs) {
      classNames = 'rounded-r-full';
   } else {
      classNames = 'rounded-none';
   }

   return (
      <button
         className={`
            ${
               isActive
                  ? index === 0
                     ? 'bg-gradient-to-r from-teal-600 to-teal-800 hover:to-teal-700'
                     : index === totalTabs
                     ? 'bg-gradient-to-l from-teal-600 to-teal-800 hover:to-teal-700'
                     : 'bg-gradient-to-r from-teal-800 via-teal-600 to-teal-800 hover:to-teal-800 hover:via-teal-700 hover:from-teal-800'
                  : 'bg-teal-900 '
            }
            ${
               isActive
                  ? 'border-teal-400 '
                  : 'border-teal-700 hover:border-teal-400 '
            }

            text-sm font-bold mxs:text-xs
            border 
            px-4 sm:px-10 md:px-12 lg:px-16 py-2 sm:py-2.5 mxs:px-2.5 msx:py-1
            uppercase tracking-wide 
            ${classNames} shadow-md 
            ${isVisible ? 'animate__animated animate__bounceIn' : ''}
            transition duration-300 ease-in-out
            shadow-teal-900
            hover:bg-teal-700
         `}
         onClick={onClick}
         style={{
            animationDelay: `${index / 6}s`,
         }}
      >
         {title}
      </button>
   );
};
