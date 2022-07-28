import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';

import { AiOutlineLoading } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';

type TInputs = {
   name: string;
   email: string;
   message: string;
};

export const ContactForm = () => {
   const [isSending, setIsSending] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<TInputs>();

   const onSubmit: SubmitHandler<TInputs> = (data, event) => {
      setIsSending(true);
      fetch('https://formsubmit.co/israeldevcorel@gmail.com', {
         method: 'POST',
         body: JSON.stringify(data),
      })
         .then((res) => {
            if (!res.ok) return Promise.reject(res);

            setIsSending(false);
            reset();

            Swal.fire(
               '¡Mensaje enviado!',
               'Gracias por escribirme. En breve nos pondremos en contacto.',
               'success'
            );
         })

         .catch((error) => {
            setIsSending(false);
            reset();

            console.log(error);
            Swal.fire(
               'No se pudo enviar tu mensaje',
               'Porfavor avísame del problema e intentalo más tarde.',
               'error'
            );
         });
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
         <div className="title">
            <h2>Déjame tu mensaje</h2>
            <span>Todos los campos son requqeridos</span>
         </div>
         <fieldset>
            <div className="input-box">
               <label htmlFor="name">Nombre:</label>
               <input {...register('name', { required: true, minLength: 2 })} />
               <div className={errors.name ? 'h-6' : 'h-0'}>
                  {errors.name && <ErrorField type={errors.name.type} />}
               </div>
            </div>

            <div className="input-box">
               <label htmlFor="email">Email:</label>
               <input
                  type="email"
                  {...register('email', {
                     required: true,
                     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  })}
               />
               <div className={errors.email ? 'h-6' : 'h-0'}>
                  {errors.email && <ErrorField type={errors.email.type} />}
               </div>
            </div>

            <div className="input-box">
               <label htmlFor="message">Mensaje:</label>
               <textarea
                  {...register('message', {
                     required: true,
                     minLength: 50,
                     maxLength: 175,
                  })}
               ></textarea>
               <div className={errors.message ? 'h-6' : 'h-0'}>
                  {errors.message && <ErrorField type={errors.message.type} />}
               </div>
            </div>
         </fieldset>

         <button type="submit">
            <span>enviar</span>
            {isSending ? (
               <AiOutlineLoading className="animate-spin" fontSize={26} />
            ) : (
               <RiSendPlaneFill fontSize={26} />
            )}
         </button>
      </form>
   );
};

const ErrorField: FC<{ type: string }> = ({ type }) => {
   switch (type) {
      case 'required':
         return <span>¡Este campo es obligatorio!</span>;
      case 'maxLength':
         return <span>Se ha superado el límite máximo de caracteres</span>;
      case 'minLength':
         return <span>El texto es demasiado corto</span>;
      case 'pattern':
         return <span>No es un email válido</span>;

      default:
         return <span>Problemas en éste campo</span>;
   }
};
