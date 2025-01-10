"use client";
import { useState, useEffect } from "react";
import DotsRectangle from "../../components/DotsRectangle";

export default function Portfolio() {

    const [dotsPerRow, setDotsPerRow] = useState(40); // Valeur par défaut

    useEffect(() => {
        const updateDots = () => {
            if (window.innerWidth < 640) {
                setDotsPerRow(20); // Mobile
            } else if (window.innerWidth < 1024) {
                setDotsPerRow(30); // Tablette
            } else {
                setDotsPerRow(50); // Desktop
            }
        };

        updateDots(); // Initial call
        window.addEventListener("resize", updateDots); // Écoute des redimensionnements

        return () => window.removeEventListener("resize", updateDots); // Nettoyage
    }, []);

    return (
        <div
            className=" bg-cover
                        bg-no-repeat
                        bg-[url('/img/colored_spots.png')]
                        pb-24"
        >

            {/* DotsRectangle Components */}
            <DotsRectangle
                className=" w-full
                            w-[100%]
                            relative sm:relative md:relative lg:relative
                            top-[-80] sm:top-[-60] md:top-[-50] lg:top-[-100]
                            right-0 sm:right-0 md:right-0 lg:right-0
                            mt-6 sm:mt-8 md:mt-12 bg-transparent
                            h-[55px]
                            z-1"
                rows={3}
                dotsPerRow={dotsPerRow}
                dotColor="#fff000"
            />

            <h1 id="skills" className=" page-title
                                        text-2xl sm:text-3xl md:text-4xl
                                        mb-12"
            >
                Skills
            </h1>
            <div className="px-4 sm:px-8 md:px-16
                      max-w-screen-lg
                      mx-auto"
            >
                <div className="flex justify-center">

                    <div className="paragraph-custom
                                    max-w-4xl
                                    w-full
                                    mx-auto
                                    relative
                                    top-[0px]
                                    text-left
                                    justify"
                    >
                        <div className="space-y-4 pb-48">
                            <div>
                                <strong>Front end</strong>
                                <div className="pt-6">
                                    <div className="flex justify-between">
                                        <span>ReactJS</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#61dafb', width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Angular</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#dd0031', width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Flutter</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#5fc9f8', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>WordPress</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#007099', width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Symfony</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#455a64', width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>JavaScript</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#f7df1e', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>CSS</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#663399', width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Tailwind CSS</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#32c9e8', width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <strong>Prototypage et Design</strong>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Figma</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Balsamiq</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#a60000', width: '75%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Photoshop</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#001834', width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <strong>Back end</strong>
                                <div className="mt-6">
                                    <div className="flex justify-between">
                                        <span>NodejS</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#66a060', width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>NestJS</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#e0234e', width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>TypeScript</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#3178c6', width: '60%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Php</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#6082bb', width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Java (Java EE)</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#f68218', width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>PostgreSQL</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#336791', width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>MySQL</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#fca61c', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>SQL Server</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#8b9097', width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Sécurité Web et Web Mobile</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-red-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <strong>Modélisation et Conception</strong>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>UML (Unified Modeling Language)</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <strong>Web Services et APIs</strong>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>Firebase</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#dd2c00', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>APIs REST</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <strong>Versioning</strong>
                                <div className="mt-2">
                                    <div className="flex justify-between">
                                        <span>GitHub</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
