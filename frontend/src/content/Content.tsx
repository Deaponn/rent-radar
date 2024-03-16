import { ReactNode } from "react";

interface IContentProps {
    children: ReactNode
}

export default function Content({ children }: IContentProps) {
    return (
        <section className="text-gray-400 bg-gray-800 body-font h-fit min-h-full">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Rent radar</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Zestawienie mieszkań</p>
                </div>
                {children}
            </div>
        </section>
    );
}
