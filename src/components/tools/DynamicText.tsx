import { FC, useEffect, useMemo, useState } from 'react';

interface DynamicTextProps {
   isVisible: boolean;
   toRotate: string[];
}

export const DynamicText: FC<DynamicTextProps> = ({ isVisible, toRotate }) => {
   const delayTyping = 100;
   const delayBeforeDelete = 1300;

   const [time, setTime] = useState<number>(0);
   const [miliSeconds, setMiliSeconds] = useState(delayTyping);
   const [isStopInterval, setIsStopInterval] = useState(false);
   const [isDeleting, setIsDeleting] = useState(false);
   const [index, setIndex] = useState(0);
   const [text, setText] = useState('');

   useEffect(() => {
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

   return useMemo(
      () => (
         <div className="wrap">
            <span>{text}</span>
            <span className="intermittent-animation">|</span>
         </div>
      ),
      [text]
   );
};
