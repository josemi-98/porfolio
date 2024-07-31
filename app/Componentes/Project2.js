import { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import JavaScript from "./icons/JavaScript";
import Css from "./icons/Css";
import React from "./icons/React";

const TAGS = {
    JAVASCRIPT: {
        name: "JavaScript",
        class: "border border-gray-500 text-white",
        icon: JavaScript,
    },
    CSS: {
        name: "CSS",
        class: "border border-gray-500 text-white",
        icon: Css,
    },
    PHP: {
        name: "PHP",
        class: "border border-gray-500 ",
        icon: null,
    },
    REACT: {
        name: "React",
        class: "border border-gray-500 text-white",
        icon: React,
    },
};

const projectData = [
    {
        title: "eCommerce",
        description:
            "Es una aplicación de eCommerce desarrollada con React, diseñada para ofrecer una experiencia de compra en línea fluida y eficiente para productos de todo tipo.",
        link: "https://ecommerce-d4b811.netlify.app/",
        github: "https://github.com/example",
        image: "/tienda.png",
        tags: [TAGS.REACT, TAGS.CSS],
    },
    {
        title: "Reserva tu juego",
        description:
        "Reserva tu juego. Aplicación destinada a la reserva de mesas y espacios para juegos de sala.",
        link: "https://github.com/josemi-98/AppReservaJuegosDeMesa",
        github: "https://github.com/example",
        image: "/juegos.png",
        tags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.PHP],
    },
    {
        title: "Timer PWA",
        description:
            "El componente Timer proporciona una cuenta regresiva personalizable con atributos para mejorar su funcionalidad y opción para descargar la aplicación.",
        link: "https://timer-pwa-cce6e1.netlify.app/",
        github: "https://github.com/example",
        image: "/TimerPWA.png",
        tags: [TAGS.JAVASCRIPT, TAGS.CSS],
    },
    {
        title: "Click & Go",
        description:
            "Aplicación que facilita la información y reservas en línea  en aquellos restaurantes disponibles. Además, los restaurantes que contraten dicho espacio dispondrán de rol de administrador para editar su anuncio, y gestionar sus reservas.",
        link: "https://github.com/josemi-98/gestionRestaurantes",
        github: "https://github.com/example",
        image: "/ReservaRestaurante.webp",
        tags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.PHP],
    },
];

export const Projects2 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2;
    const totalProjects = projectData.length;
    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    // Paginación: obtener proyectos para la página actual
    const currentProjects = projectData.slice(
        (currentPage - 1) * projectsPerPage,
        currentPage * projectsPerPage
    );

    // Manejar cambio de página
    const handlePageChange = (direction) => {
        if (direction === "next" && currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="flex flex-col items-center">
            {currentProjects.length === 0 ? (
                <p>No hay productos</p>
            ) : (
                <div className="flex flex-wrap gap-6">
                    {currentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex w-full max-w-4xl mx-auto rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto"
                        >
                            <div className="group relative flex flex-col sm:flex-row h-auto sm:h-72 w-full overflow-hidden rounded-xl border border-gray-600 dark:border-gray-700 p-3.5">
                                {/* BorderBeam aplicado en hover */}
                                <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:block hidden">
                                    <BorderBeam
                                        className="absolute inset-0"
                                        size={200} // Ajusta según el tamaño deseado
                                        borderWidth={2} // Ajusta el ancho del borde
                                        colorFrom="#ffaa40" // Color de inicio del gradiente
                                        colorTo="yellow" // Color final del gradiente
                                    />
                                </div>

                                {/* Contenedor de la imagen */}
                                <div className="relative flex-shrink-0 w-full sm:w-2/4 h-48 sm:h-full overflow-hidden rounded-xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className=" transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-xl"
                                    />
                                </div>

                                {/* Contenedor del contenido */}
                                <div className="flex flex-col justify-center p-4 w-full sm:w-2/4 bg-transparent text-white">
                                    <div className="mb-4">
                                        <h1 className="text-2xl font-bold text-yellow-500 mb-2">
                                            {project.title}
                                        </h1>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {Array.isArray(project.tags) ? (
                                                project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${tag.class}`}
                                                    >
                                                        {tag.icon ? (
                                                            <tag.icon className="w-4 h-4 mr-1" />
                                                        ) : null}
                                                        {tag.name}
                                                    </span>
                                                ))
                                            ) : (
                                                <p>No hay etiquetas</p>
                                            )}
                                        </div>

                                        <p className="text-sm mt-4 text-gray-200">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="h-8 w-8 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line
                                                x1="10"
                                                y1="14"
                                                x2="21"
                                                y2="3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Controles de paginación */}
            <div className="flex mt-6 ">
                <button
                    onClick={() => handlePageChange("prev")}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-white bg-transparent border-2 border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <svg
                        className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4"
                        />
                    </svg>
                    Anterior
                </button>
                <button
                    onClick={() => handlePageChange("next")}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-transparent border-2 border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Siguiente
                    <svg
                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
