"use client";

import DotsRectangle from "../../components/dots/DotsRectangle";
import { LABELS, PAGE_NAMES } from "../../components/navbar/route";

export default function Skills() {

    return (
        <div className="bg-cover
                        bg-no-repeat
                        bg-[url('/img/colored_spots.webp')]
                        pb-24"
        >

            {/* SEPARATOR */}
            <div className="min-h-[60px]"></div>

            <DotsRectangle
                className="w-full relative h-[55px] z-1"
                rows={3}
                dotColor="#fff000"
            />

            <h2 id={PAGE_NAMES.SKILLS} className="title-page">{LABELS.SKILLS}</h2>

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
                    
                </p>
                <div className="paragraph-custom mt-4">
                    <p>J’exerce actuellement ces compétences sur des stacks modernes et pour tous mes développements :</p>
                    <ul className="mt-2">
                        <li>◉ Conception UX / UI (définition des fonctionnalités, parcours utilisateurs, maquettes, …)</li>
                        <li>◉ Architecture (Robustesse et évolutivité)</li>
                        <li>◉ Développement Front (Web/Mobile) et Backend (Base de données, Web Services, ...)</li>
                        <li>◉ Sécurité (Protection des données sensibles, prévention des vulnérabilités, ...)</li>
                        <li>◉ Tests (unitaires, d’intégrations, fonctionnels, de non-régression, ...)</li>
                        <li>◉ Automatisation de l’intégration et du déploiement continu</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}