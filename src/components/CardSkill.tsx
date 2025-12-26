import React, { FC, ReactElement } from 'react';
import TrackVisibility from 'react-on-screen';

interface CardSkillProps {
   name: string;
   icon: ReactElement;
   index: number;
}

export const CardSkill: FC<CardSkillProps> = ({ name, icon, index }) => {
   return (
      <TrackVisibility once={true}>
         {({ isVisible }) => (
            <div
               className={`flex flex-col justify-center items-center hover:-translate-y-4 transition-all duration-300 ease-in-out cursor-default m-2
                ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}
               `}
               style={{
                  animationDelay: `${index / 8}s`,
               }}
            >
               <div className="text-6xl text-secondary">{icon}</div>
               <span className="text-lg text-secondary">{name}</span>
            </div>
         )}
      </TrackVisibility>
   );
};
