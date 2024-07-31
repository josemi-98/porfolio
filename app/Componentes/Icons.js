"use client";

import React, { useState } from "react";
import { Dock } from "@/components/magicui/dock";
import Image from "next/image";

export const DockDemo = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText("josemimb98@gmail.com")
            .then(() => {
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 3000); 
            })
            .catch((error) => {
                console.error("Error al copiar el correo: ", error);
            });
    };

    return (
        <div className="hidden lg:flex fixed left-4 h-full bg-transparent-800 flex items-center justify-center pb-20">
            <div direction="middle" className="flex flex-col space-y-4">
                <a
                    href="https://www.linkedin.com/in/jose-miguel-martin-berlango/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.275c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.275h-3v-5.555c0-1.326-.025-3.031-1.848-3.031-1.849 0-2.131 1.445-2.131 2.939v5.647h-3v-10h2.881v1.366h.041c.402-.762 1.383-1.564 2.849-1.564 3.046 0 3.608 2.006 3.608 4.614v5.584z" />
                    </svg>
                </a>

                <a
                    href="https://github.com/josemi-98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.467-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.004-.403 1.021.005 2.047.137 3.006.403 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.607-2.804 5.629-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.203-6.085 8.203-11.385 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>

                <div className="relative group">
                    <a
                        href="mailto:josemimb98@gmail.com"
                        onClick={(e) => {
                            e.preventDefault(); 
                            copyToClipboard(); 
                        }}
                        className="flex items-center justify-center"
                    >
                        <svg
                            className="h-6 w-6 text-white hover:text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </a>
                    <div
                        id="tooltip-right"
                        role="tooltip"
                        className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700 ${showTooltip ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    >
                        Email copiado en portapapeles!
                        <div className="tooltip-arrow absolute bg-gray-900 dark:bg-gray-700 w-2 h-2 rotate-45 transform translate-x-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
