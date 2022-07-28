import React from 'react';
import { ContactForm } from './ContactForm';

export const Contact = () => {
   return (
      <div className="bg-slate-800 mt-8" id="contact">
         <div className="container pt-6 pb-16 md:pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
               <ContactForm />
               <div>socials</div>
            </div>
         </div>
      </div>
   );
};
