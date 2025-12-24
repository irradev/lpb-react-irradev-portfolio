import { useNavigate } from "react-router";
import { AiOutlineHome } from 'react-icons/ai';

export const NotFound404 = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-grow flex flex-col justify-center items-center h-full max-w-lg mx-auto ">
            <h1 className="text-9xl font-bold text-rose-600 animate__animated animate__fadeIn">404</h1>
            <p className="text-4xl text-secondary animate__animated animate__fadeInRight">Page not found</p>
            <p className="text-lg text-mutted my-10 text-center animate__animated animate__fadeIn" style={{ animationDelay: `0.4s` }}>La página que buscas puede haber sido eliminada, su nombre ha cambiado o está temporalmente no disponible.</p>
            <div className="flex justify-center items-center w-full animate__animated animate__fadeInUp animate__slow" style={{ animationDelay: `1.3s` }}>

                <button
                    onClick={() => navigate('/')}
                    className="flex justify-center items-center gap-2 border border-gray-200 hover:border-gray-400 hover:scale-105 text-lg font-bold p-2 mt-2 w-full max-w-sm uppercase tracking-wide rounded-md shadow-lg text-shadow-xs transition-all duration-300 ease-out"
                >
                    <AiOutlineHome fontSize={22} />
                    Ir a la página principal</button>
            </div>
        </div>
    );
};