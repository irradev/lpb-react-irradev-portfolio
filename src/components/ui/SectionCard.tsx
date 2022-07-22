import React, { FC, ReactElement } from 'react';

interface SectionCardProps {
   children: ReactElement;
   className?: string;
}

export const SectionCard: FC<SectionCardProps> = ({
   children,
   className = '',
}) => {
   return (
      <div
         className={`flex flex-col justify-start items-center p-4 relative rounded-lg z-10 shadow-lg mx-auto ${className}`}
      >
         {children}

         <BackgroundEffect />
      </div>
   );
};

const BackgroundEffect = () => {
   return (
      <div className="bg-gradient-to-bl from-slate-800 to-stone-800 absolute w-full h-full top-0 right-0 opacity-80 -z-10 rounded-lg"></div>
   );
};
