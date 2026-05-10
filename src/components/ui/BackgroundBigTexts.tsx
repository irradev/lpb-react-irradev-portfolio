
export const BackgroundBigTexts = () => {

    const titles = [
        'Motion',
        'Frontend',
        'Interaction',
        'UX/UI',
        'Interfaces',
        'Microinteractions',
        'Experiences',
        'Gamification',
        'Design Systems',
        'Animations',
        'Creative UI',
    ];

    return (
        <div className="fixed flex flex-wrap justify-center items-center h-full w-[200vw] -top-16 -right-16 z-0 transform -rotate-45 pointer-events-none">
            {Array.from({ length: 1200 }).map((_, index) => {
                const randomIndex = Math.floor(Math.random() * titles.length)
                return (
                    <>
                        <span key={index} className="text-3xl opacity-[0.03] inline-block py-6 mr-4">
                            {titles[randomIndex]}
                        </span>
                        <span className="text-3xl opacity-[0.03] inline-block py-6 mr-4">
                            ·
                        </span>
                    </>
                )
            })}
        </div>
    );
};