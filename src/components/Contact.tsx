import React from 'react';
import { ContactForm } from './ContactForm';
import { SocialNetworks } from './SocialNetworks';
import { SectionTitle } from './ui/SectionTitle';

export const Contact = () => {
  return (
    <div
      className="mt-8"
      id="contact"
    >
      <div className="container pt-6 pb-16 md:pb-8">
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <SectionTitle title="¿Interesado en trabajar juntos?" className='max-w-md' />
          {/* <ContactForm /> */}
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};
