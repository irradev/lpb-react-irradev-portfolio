import React, { FC } from 'react';
import { TStatus } from '../data/projects';

interface TagStatusProjectProps {
   status: TStatus;
}

export const TagStatusProject: FC<TagStatusProjectProps> = ({ status }) => {
   let colorTag = '';

   switch (status) {
      case 'Desarrollando':
         colorTag = 'bg-orange-400 border-orange-500';
         break;
      case 'Terminado':
         // colorTag = 'bg-cyan-500 border-cyan-600';
         // colorTag = 'bg-blue-500 border-blue-600';
         colorTag = 'bg-teal-600 border-teal-700';
         break;
      case 'Actualizado':
         colorTag = 'bg-green-500 border-green-700';
         break;
      case 'Antiguo':
         colorTag = 'bg-gray-600 border-gray-700';
         break;
      default:
         colorTag = 'bg-red-600 border-gray-700';
         break;
   }
   if (status === 'Desarrollando') {
      colorTag = 'bg-orange-400 border-orange-500';
   }

   return (
      <span
         className={`
            py-1 px-1.5
            text-xs
            border
            ${colorTag}
            font-bold   
            uppercase
            tracking-wide
            rounded-sm
            absolute bottom-1 right-2
            text-shadow-xs
            shadow-md
         `}
      >
         {status === 'Desarrollando'
            ? 'En desarrollo...'
            : status === 'Antiguo'
            ? '...Old'
            : status}
      </span>
   );
};
