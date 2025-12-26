
import { useParams } from "react-router";
import { IProject, projects } from "../data/projects";
import { Link, Navigate, useNavigate } from "react-router";
import { BiArrowBack } from 'react-icons/bi'
import { FiGithub, FiLink } from "react-icons/fi";
import { TbBrandGumroad } from "react-icons/tb";

export const ProjectDetails = () => {
    const { slug } = useParams();

    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        return <Navigate to="/page-not-found" />;
    }

    return (
        <div className="container flex flex-col justify-center items-center mt-8 sm:mt-16">
            <BackButton project={project} className="hidden sm:inline-block" />
            <h1 className="self-start text-4xl font-bold mb-8 animate__animated animate__fadeInLeft" style={{ animationDelay: `0.2s` }}>{project?.name}</h1>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-16">
                <ProjectImage image={project?.image} name={project?.name} />
                <ProjectContent project={project} />
            </div>
            <BackButton project={project} className="inline-block sm:hidden" />
        </div>
    );
};

const BackButton = ({ project, className }: { project: IProject, className?: string }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '0';
        setTimeout(() => {
            navigate("/?lastProjectViewed=" + project.slug);
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 200);
        }, 500);

    }
    return (
        <div className={`self-start hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeInLeft ${className}`}>
            <button onClick={handleNavigate} className="flex justify-start items-center mb-2 cursor-pointer hover:horizontal-bounce-animation text-secondary hover:text-teal-500 transition-colors duration-300 ease-in-out">
                <BiArrowBack className="mr-2 " />
                Volver al Inicio
            </button>
        </div>
    )
}

const ProjectImage = ({ image, name }: { image: string, name: string }) => {
    return (
        <div className="w-full md:max-w-lg h-auto rounded-lg shadow-xl animate__animated animate__fadeInDown" style={{ animationDelay: `0.6s` }}>
            <img src={image} alt={name} className="w-full h-auto rounded-lg aspect-[16/9] object-cover" />
        </div>
    )
}

const ProjectContent = ({ project }: { project: IProject }) => {
    return (
        <div className="w-full animate__animated animate__fadeInUp" style={{ animationDelay: `0.4s` }}>
            {/* <h1 className="text-4xl font-bold mb-4">{project?.name}</h1> */}
            <p className="text-lg">{project?.shortDescription}</p>

            {/* Technologies */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Tecnologías Utilizadas</h2>
                <ul className="list-disc pl-6">
                    {project?.tags?.map((tag: string, index: number) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <ProjectLinks project={project} />
        </div>
    )
}

const ProjectLinks = ({ project }: { project: IProject }) => {
    return (
        <div className="mt-16 animate__animated animate__fadeInRight animate__delay-1s ">
            <h2 className="text-2xl font-bold mb-4">Demo</h2>
            <div className="flex mxs:flex-col justify-start mxs:items-start items-center gap-2 ">
                {project.urlGitHub && (
                    <a
                        href={project.urlGitHub}
                        target="_blank"
                        className="btn-card-project bg-stone-700 hover:text-stone-700 hover:bg-gray-100 "
                    >
                        <FiGithub fontSize={18} />
                        <span>github</span>
                    </a>
                )}
                {project.urlGumroad && (
                    <a
                        href={project.urlGumroad}
                        target="_blank"
                        className="btn-card-project text-black bg-fuchsia-400 hover:text-fuchsia-400 hover:bg-gray-100 "
                    >
                        <TbBrandGumroad fontSize={18} />
                        <span>shop</span>
                    </a>
                )}
                <a
                    href={project.urlDemo}
                    target="_blank"
                    className="btn-card-project bg-fuchsia-800 hover:text-fuchsia-800 hover:bg-gray-200"
                >
                    <span>demo</span>
                    <FiLink fontSize={18} />
                </a>
            </div>
        </div>
    )
}
