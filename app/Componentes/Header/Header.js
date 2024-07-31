"use client";
import { useEffect } from "react";
import "./Header.css";

const navItems = [
    {
        title: "Inicio",
        label: "inicio",
        url: "#inicio",
    },
    {
        title: "Experiencia",
        label: "experiencia",
        url: "#experiencia",
    },
    {
        title: "Proyectos",
        label: "proyectos",
        url: "#proyectos",
    },
    {
        title: "Sobre mí",
        label: "sobre-mi",
        url: "#sobre-mi",
    },
    {
        title: "Habilidades",
        label: "habilidades",
        url: "#habilidades",
    },
];

const Header = ({ children }) => {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navItems = document.querySelectorAll("header nav a");

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navItems.forEach((item) => {
                        if (
                            item.getAttribute("aria-label") === entry.target.id
                        ) {
                            item.classList.add("text-yellow-500");
                        } else {
                            item.classList.remove("text-yellow-500");
                        }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                observer.disconnect();
            } else {
                sections.forEach((section) => {
                    observer.observe(section);
                });
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            observer.disconnect();
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);

    return (
        <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-5">
            <nav className="flex px-3 text-sm font-medium rounded-full text-white dark:text-gray-200 justify-center items-center">
                {navItems.map((link) => (
                    <a
                        key={link.label} // Agregar la prop key aquí
                        className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
                        aria-label={link.label}
                        href={link.url}
                    >
                        {link.title}
                    </a>
                ))}
                {/* <ThemeToggle /> */}
            </nav>
        </header>
    );
};

export default Header;
