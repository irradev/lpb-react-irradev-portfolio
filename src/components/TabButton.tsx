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
                     ? 'bg-gradient-to-r from-teal-600 to-teal-800'
                     : index === totalTabs
                     ? 'bg-gradient-to-l from-teal-600 to-teal-800'
                     : 'bg-gradient-to-r from-teal-800 via-teal-600 to-teal-800'
                  : 'bg-teal-900 '
            }
            ${
               isActive
                  ? 'border-teal-500 shadow-teal-700'
                  : 'border-teal-700 shadow-teal-800'
            }
            text-sm font-bold mxs:text-xs
            border 
            px-16 py-2.5 mxs:px-1 msx:py-1
            uppercase tracking-wide 
            ${classNames} shadow-md 
            ${isVisible ? 'animate__animated animate__bounceIn' : ''}
            transition duration-300 ease-in-out
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
