
interface SectionTitleProps {
    title: string;
    className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
    return (
        <h2 className={`text-5xl font-bold text-center py-8 px-4 ${className}`}>{title}</h2>
    );
};