import React, { FC } from 'react';
import { TFilterTechnologies } from '../data/filterTechnologies.type';
import { useImageFilterTechnology } from '../hooks/useImageFilterTechnology';

interface FilterIconButtonProps {
   isVisible: boolean;
   technology: TFilterTechnologies;
   index: number;
   isActive: boolean;
   onClick: () => void;
}


export const FilterIconButton: FC<FilterIconButtonProps> = ({
   isVisible,
   technology,
   index,
   isActive,
   onClick,
}) => {
   let classNames = '';


   return (
      <button
         className={`
            group

         text-sm font-bold mxs:text-xs
           p-2.5
           
            uppercase tracking-wide 
            ${classNames} 
            ${isVisible ? 'animate__animated animate__fadeInRight' : ''}
            ${isActive ? 'border-b border-teal-300' : ''}
            transition-all duration-300 ease-in-out
          
         `}
         onClick={onClick}
         style={{
            animationDelay: `${index / 6}s`,
         }}
      >
         {useImageFilterTechnology(technology, isActive)}

         <span className={`
            absolute -top-5 left-1/2 
            -translate-x-1/2 
            text-xs
            opacity-0
            ${!isActive ? 'group-hover:opacity-100' : ''}
            transition-all duration-200 ease-in
         `}>{technology}</span>

         <span className={
            `absolute -bottom-5 left-1/2 
         -translate-x-1/2 
         text-xs
         opacity-0
         ${isActive ? 'opacity-100' : ''}
         transition-all duration-200 ease-in
         `}>{technology}</span>
      </button>
   );
};
