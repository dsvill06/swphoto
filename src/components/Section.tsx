import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
    classname?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children,classname }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className={`py-10 lg:py-20 pt-20 ${classname ? classname : ""}`}>
            <SectionTitle>
                <h2 className="text-center mb-4">{title}</h2>
            </SectionTitle>
            <p className="mb-12 text-center">{description}</p>
            {children}
        </section>
    )
}

export default Section