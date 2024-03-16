import { ReactNode } from "react";

interface IContentProps {
    children: ReactNode
}

export default function Content({ children }: IContentProps) {
    return (
        <section className="text-gray-400 bg-gray-800 body-font h-fit min-h-full">
            <div className="container px-5 py-10 mx-auto">
                {children}
            </div>
        </section>
    );
}
