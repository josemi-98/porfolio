"use client";

import { motion } from "framer-motion";

const animationProps = {
    initial: { "--x": "100%", scale: 0.8 },
    animate: { "--x": "-100%", scale: 1 },
    whileTap: { scale: 0.95 },

    transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
            type: "spring",
            stiffness: 200,
            damping: 5,
            mass: 0.5,
        },
    },
};

const ShinyButton = ({ text = "shiny-button", onClick }) => {
    return (
        <motion.button
            {...animationProps}
            onClick={onClick}
            style={{
                backgroundColor: "transparent", // Fondo blanco
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                border: "2px solid white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease-in-out",
            }}
            className="relative font-medium backdrop-blur-xl hover:shadow dark:bg-gray-800 dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
        >
            <span
                className="relative block h-full w-full text-sm uppercase tracking-wide text-white dark:text-white"
                style={{
                    maskImage:
                        "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
                }}
            >
                {text}
            </span>
            <span
                style={{
                    mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                    maskComposite: "exclude",
                }}
                className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
            ></span>
        </motion.button>
    );
};

export default ShinyButton;
