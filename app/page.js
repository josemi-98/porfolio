"use client";
import AboutMe from "./Componentes/AboutMe";
import Skills from "./Componentes/Skills";
import Header2 from "./Componentes/Header/Header";
import ButtonCV from "./Componentes/ButtonCV";
import "./globals.css";
import { DockDemo } from "./Componentes/Icons";
import ExperienceList from "./Componentes/Experience";
import { Projects2 } from "./Componentes/Project2";
import Meteors from "@/components/magicui/meteors";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const sectionRefs = useRef([]);

    // Inicializa las referencias de secciones como un array vacío
    sectionRefs.current = [];

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const [animationStates, setAnimationStates] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimationStates((prevStates) => ({
                            ...prevStates,
                            [entry.target.id]: "animate-zoom-in",
                        }));

                        // Remove the animation class after the animation is done
                        const timeout = setTimeout(() => {
                            setAnimationStates((prevStates) => ({
                                ...prevStates,
                                [entry.target.id]: "",
                            }));
                        }, 600); // Duration of the animation in milliseconds

                        // Clean up
                        return () => clearTimeout(timeout);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div>
            <DockDemo />
            <Header2 />

            <main className="text-white">
                {/* Introducción */}
                <section
                    ref={addToRefs}
                    className={`w-full mx-auto lg:w-[740px] py-20 ${animationStates["inicio"]}`}
                    id="inicio"
                >
                    <div className="relative flex flex-col items-center h-auto w-full max-w-full lg:h-[500px] lg:items-start lg:justify-center rounded-lg bg-transparent overflow-hidden">
                        <Meteors number={90} />
                        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-x-4 lg:justify-start w-full">
                            <h1 className="text-4xl md:text-5xl font-bold gap-x-4 pb-4 text-center lg:text-left">
                                José Miguel
                            </h1>
                            <span className="relative inline-flex overflow-hidden rounded-full p-[1px] mt-4 lg:mt-4 lg:ml-5">
                                <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                                <div className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-black-800 bg-transparent rounded-full cursor-pointer dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                                    Disponible para trabajar
                                </div>
                            </span>
                        </div>
                        <h2 className="text-lg md:text-xl mt-2 text-center lg:text-left">
                            Hola, soy Desarrollador Web y Full-Stack de Jaén,
                            España. <br />
                            Especializado en crear aplicaciones web.
                        </h2>
                        <div className="flex items-center mt-8">
                            <ButtonCV />
                        </div>
                    </div>
                </section>

                {/* EXPERIENCIA */}
                <section
                    ref={addToRefs}
                    id="experiencia"
                    className={`w-full mx-auto px-4 lg:px-0 lg:w-[740px] py-16 lg:py-44 ${animationStates["experiencia"]}`}
                >
                    <h2 className="flex items-center mb-6 text-2xl lg:text-3xl font-semibold gap-x-4 lg:gap-x-8 text-white/80 dark:text-white">
                        <svg
                            className="h-6 w-6 lg:h-8 lg:w-8"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                            <path d="M12 12l0 .01"></path>
                            <path d="M3 13a20 20 0 0 0 18 0"></path>
                        </svg>
                        Experiencia
                    </h2>
                    <ExperienceList />
                </section>

                {/* PROYECTOS */}
                <section
                    ref={addToRefs}
                    id="proyectos"
                    className={`w-full mx-auto px-4 lg:px-0 lg:w-[740px] py-16 lg:py-44 ${animationStates["proyectos"]}`}
                >
                    <h2 className="flex items-center mb-6 text-2xl lg:text-3xl font-semibold gap-x-4 lg:gap-x-8 text-white/80 dark:text-white">
                        <svg
                            className="h-8 w-8 text-white-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <polyline points="7 8 3 12 7 16" />{" "}
                            <polyline points="17 8 21 12 17 16" />{" "}
                            <line x1="14" y1="4" x2="10" y2="20" />
                        </svg>
                        Proyectos
                    </h2>
                    <Projects2 />
                </section>

                {/* SOBRE MI */}
                <section
                    ref={addToRefs}
                    id="sobre-mi"
                    className={`w-full mx-auto px-4 lg:px-0 lg:w-[740px] py-16 lg:py-44 ${animationStates["sobre-mi"]}`}
                >
                    <h2 className="flex items-center mb-6 text-2xl lg:text-3xl font-semibold gap-x-4 lg:gap-x-8 text-white/80 dark:text-white">
                        <svg
                            className="h-6 w-6 lg:h-8 lg:w-8 text-white-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11l2 2l4 -4" />
                        </svg>
                        Sobre mí
                    </h2>
                    <AboutMe />
                </section>

                {/* HABILIDADES */}
                <section
                    ref={addToRefs}
                    id="habilidades"
                    className={`w-full mx-auto px-4 lg:px-0 lg:w-[740px] py-16 lg:py-44 ${animationStates["habilidades"]}`}
                >
                    <h2 className="flex items-center mb-6 text-2xl lg:text-3xl font-semibold gap-x-4 lg:gap-x-8 text-white/80 dark:text-white">
                        <svg
                            className="h-6 w-6 lg:h-8 lg:w-8 text-white-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="12 4 4 8 12 12 20 8 12 4" />
                            <polyline points="4 12 12 16 20 12" />
                            <polyline points="4 16 12 20 20 16" />
                        </svg>
                        Habilidades
                    </h2>
                    <Skills />
                </section>
            </main>

            {/* FOOTER */}
            <footer className="dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Josemi
                        </a>
                        . Casi todos los derechos reservados.
                    </span>
                </div>
            </footer>
        </div>
    );
}
