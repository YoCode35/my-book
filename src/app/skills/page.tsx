"use client";

import useDotsPerRow from "../../components/useResponsiveDots";
import DotsRectangle from "../../components/DotsRectangle";

export default function Skills() {

    const dotsPerRow = useDotsPerRow();

    return (
        <div
            className=" bg-cover
                        bg-no-repeat
                        bg-[url('/img/colored_spots.png')]"
        >

            {/* SEPARATOR */}
            <div className="min-h-[60px]"></div>

            <DotsRectangle
                className="w-full relative h-[55px] z-1"
                rows={3}
                dotsPerRow={dotsPerRow}
                dotColor="#fff000"
            />

            <h2 id="skills" className="title-page">Skills</h2>

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
                                <strong className="skills-detail-title">Front end</strong>
                                <div className="skills-detail pt-6">
                                    <div className="flex justify-between">
                                        <span>ReactJS</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#61dafb', width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>NextJS</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-700 h-2 rounded-full" style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Angular</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#dd0031', width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Flutter</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#5fc9f8', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>WordPress</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#007099', width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Symfony</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#455a64', width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>JavaScript</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#f7df1e', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>CSS</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#663399', width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Tailwind CSS</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#32c9e8', width: '60%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="skills-detail-subtitle pt-6">
                                <strong>Prototypage et Design</strong>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Figma</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-gray-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Balsamiq</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#a60000', width: '75%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
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
                                <strong className="skills-detail-title">Back end</strong>
                                <div className="skills-detail mt-6">
                                    <div className="flex justify-between">
                                        <span>NodejS</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#66a060', width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>TypeScript</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#3178c6', width: '60%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Php</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#6082bb', width: '50%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Java (Java EE)</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#f68218', width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>PostgreSQL</span>
                                        <span>Débutant</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#336791', width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>MySQL</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#fca61c', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>SQL Server</span>
                                        <span>Intermédiaire</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#8b9097', width: '50%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="skills-detail-subtitle pt-6">
                                <strong>Modélisation et Conception</strong>
                                <div className="skills-detail mt-2">
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
                                <strong className="skills-detail-title">Sécurité Web et Web Mobile</strong>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Protection des données sensibles</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="h-2 rounded-full" style={{ backgroundColor: '#ff0000', width: '80%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Prévention des vulnérabilités</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="h-2 rounded-full" style={{ backgroundColor: '#ff0000', width: '75%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <strong className="skills-detail-title">Web Services et APIs</strong>
                                <div className="skills-detail mt-2">
                                    <div className="flex justify-between">
                                        <span>Firebase</span>
                                        <span>Avancé</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="h-2 rounded-full" style={{ backgroundColor: '#dd2c00', width: '70%' }}></div>
                                    </div>
                                </div>
                                <div className="skills-detail mt-2">
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
                                <strong className="skills-detail-title">Versioning</strong>
                                <div className="skills-detail mt-2">
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
