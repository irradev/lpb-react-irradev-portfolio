import { useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";

export const NotFound404 = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-grow flex flex-col justify-center items-center h-full max-w-lg mx-auto ">
            <h1 className="text-9xl font-bold text-rose-600">404</h1>
            <p className="text-4xl text-secondary">Page not found</p>
            <p className="text-lg text-mutted my-10 text-center">La página que buscas puede haber sido eliminada, su nombre ha cambiado o está temporalmente no disponible.</p>
            <button className="flex justify-center items-center gap-2  border border-gray-200 hover:border-gray-400 hover:scale-105 text-lg font-bold p-2 mt-2 w-full max-w-sm uppercase tracking-wide rounded-md shadow-lg text-shadow-xs transition-all duration-300 ease-out" onClick={() => navigate('/')}>
                <BiArrowBack fontSize={22} />
                Volver a la página principal</button>
        </div>
    );
};