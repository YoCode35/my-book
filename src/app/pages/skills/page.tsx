"use client";

//import useDotsPerRow from "../../../components/dots/useResponsiveDots";
import DotsRectangle from "../../../components/dots/DotsRectangle";

export default function Skills() {

    //const dotsPerRow = useDotsPerRow();

    return (
        <div
            className=" bg-cover
                        bg-no-repeat
                        bg-[url('/img/colored_spots.png')]
                        pb-24"
        >

            {/* SEPARATOR */}
            <div className="min-h-[60px]"></div>

            <DotsRectangle
                className="w-full relative h-[55px] z-1"
                rows={3}
                dotColor="#fff000"
            />

            <h2 id="skills" className="title-page">Skills</h2>

            <div className="px-4
                            sm:px-8 md:px-16 2xl:px-0
                            max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl
                            mx-auto"
            >
                <p className="paragraph-custom mt-4">
                    J’exerce dans le secteur du numérique depuis une vingtaine d’années. J’ai commencé par maitriser le développement front-end, avec l’HTML, le CSS, le JavaScript et quelques notions en PHP.
                    Au gré de mes développements, je me suis toujours efforcé à factoriser mon code et à l’écrire de la manière la plus propre possible.
                </p>
                <p className="paragraph-custom mt-4">
                    Ma montée en compétences récente en back-end me permet aujourd’hui de développer une application from scratch jusqu’à son aboutissement.
                </p>
                <p className="paragraph-custom mt-4">
                    Aujourd’hui, j’exerce ces compétences en me perfectionnant et en explorant des stacks modernes comme React.js, Next.js, Angular, TypeScript, Node.js ou encore Flutter.
                </p>
                <p className="paragraph-custom mt-4">
                    Prochainement, je prévois le déploiement de mon application{" "}
                    <a
                        href="https://www.mytodolist.tech"
                        target="_blank"
                        rel="noopener noreferrer"  // Security
                        className="text-navLinkHover hover:underline"
                    >
                        MyTodoList
                    </a>{" "}
                    sur les Stores d’Apple et d’Android.
                </p>
                <p className="paragraph-custom mt-4">
                    J’aimerais aussi assimiler le Framework NestJS permettant de créer des applications côté serveur.
                </p>
                <div className="paragraph-custom mt-4">
                    <p>Enfin, je souhaite, pour tous mes développements :</p>
                    <ul className="mt-2">
                        <li>- Exploiter les patterns de conception actuels</li>
                        <li>- Intégrer des tests automatisés dans mon workflow</li>
                        <li>- Mettre en place un système de CI/CD robuste</li>
                        <li>- Utiliser des outils de build modernes comme Vite</li>
                        <li>- Continuer à utiliser TypeScript</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}