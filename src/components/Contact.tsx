import React from 'react';
import { ContactForm } from './ContactForm';
import { SocialNetworks } from './SocialNetworks';
import { SectionTitle } from './ui/SectionTitle';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <div
      className="pt-8 bg-slate-900"
      id="contact"
    >
      <div className="container pt-6 pb-16 md:pb-8">
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <TrackVisibility once>
            {({ isVisible }) => (
              <SectionTitle title="¿Interesado en trabajar juntos?" className={`max-w-md ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} />
            )}
          </TrackVisibility>
          {/* <ContactForm /> */}
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};
