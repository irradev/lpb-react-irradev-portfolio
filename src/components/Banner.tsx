import React, {
   FC,
   useCallback,
   useEffect,
   useMemo,
   useRef,
   useState,
} from 'react';
import TrackVisibility from 'react-on-screen';
import { BiSend } from 'react-icons/bi';
import graphic from '../assets/img/graphic_banner.png';
import 'animate.css';

export const Banner = () => {
   return (
      <section className="banner " id="home">
         <div className="container flex justify-center items-center h-full sm:h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
               <div className="flex items-center">
                  <TrackVisibility>
                     {({ isVisible }) => (
                        <div
                           className={
                              isVisible
                                 ? 'animate__animated animate__fadeIn'
                                 : ''
                           }
                        >
                           <h1 className="flex justify-center flex-col gap-4 font-bold mt-8 sm:mt-0">
                              <span className="text-4xl">¡Hola!</span>
                              <span className="text-5xl">
                                 Soy Israel Vázquez
                              </span>
                              <span className="txt-rotate h-10 text-3xl">
                                 <DynamicText isVisible={isVisible} />{' '}
                              </span>
                           </h1>
                           <p className="text-lg py-4">
                              Del diseño a la funcionalidad. Transformo tus
                              ideas en aplicaciones web escalables con la
                              tecnología de ¡React!
                           </p>
                        </div>
                     )}
                  </TrackVisibility>
               </div>
               <div className="mx-auto  w-full max-w-md">
                  <img
                     className="updown-animation"
                     src={graphic}
                     alt="Code Exploring Graphic"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

interface DynamicTextProps {
   isVisible: boolean;
}

const DynamicText: FC<DynamicTextProps> = ({ isVisible }) => {
   const delayTyping = 100;
   const delayBeforeDelete = 1300;

   const [time, setTime] = useState<number>(0);
   const [miliSeconds, setMiliSeconds] = useState(delayTyping);
   const [isStopInterval, setIsStopInterval] = useState(false);
   const [isDeleting, setIsDeleting] = useState(false);
   const [index, setIndex] = useState(0);
   const [text, setText] = useState('');
   const toRotate = [
      'Desarrollador WEB',
      'Especialista en REACT',
      'Investigador UX',
      // 'Técnico en Ingeniería',
      'Amante del Pixel Art <3',
   ];

   useEffect(() => {
      console.log(miliSeconds);
      let ticker = setInterval(() => {
         setTime((time) => time + 1);
      }, miliSeconds);

      if (!isVisible) {
         clearInterval(ticker);
      } else if (isStopInterval) {
         clearInterval(ticker);
         setTimeout(() => {
            setIsStopInterval(false);
         }, delayBeforeDelete);
      }

      return () => {
         clearInterval(ticker);
      };
   }, [isVisible, isStopInterval, miliSeconds]);

   useEffect(() => {
      let fullText = toRotate[index];
      let updatedText = isDeleting
         ? fullText.substring(0, text.length - 1)
         : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
         console.log('fullText Reached!');
         setIsDeleting(true);
         setIsStopInterval(true);
         setMiliSeconds((prevmiliSeconds) => prevmiliSeconds / 2);
      } else if (isDeleting && updatedText === '') {
         setMiliSeconds(delayTyping);
         setIsDeleting(false);
         if (index === toRotate.length - 1) {
            setIndex(0);
         } else {
            setIndex(index + 1);
         }
      }
   }, [time]);

   return useMemo(() => <span className="wrap">{text}</span>, [text]);
};
