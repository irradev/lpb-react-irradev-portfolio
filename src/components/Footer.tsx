import 'animate.css';

export const Footer = () => {
   return (
      <div className="flex justify-center items-center w-full pt-5 pb-20 sm:pb-5 text-xl font-medium gap-4 cursor-default text-shadow-xs hover:scale-125 transition-transform duration-700 ease-in-out">
         <a
            className="hover:text-teal-300 transition-colors duration-500 ease-in-out"
            href="https://twitter.com/irradev"
            target="_blank"
         >
            @irraDev
         </a>
         <span>-</span>
         <span>{new Date().getFullYear()}</span>
      </div>
   );
};
