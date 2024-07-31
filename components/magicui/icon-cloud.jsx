"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { BorderBeam } from "./border-beam";

export default function IconCloud({ iconSlugs }) {
    const [data, setData] = useState(null);
    const { theme } = useTheme();

    useEffect(() => {
        // Verifica si iconSlugs está correctamente definido
        if (iconSlugs && iconSlugs.length) {
            fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
        }
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        if (!data || !data.simpleIcons) return null;

        return Object.values(data.simpleIcons).map((icon) => (
            <div
                key={icon.slug}
                className="flex flex-col items-center bg-transparent p-1 w-24"
            >
                {renderSimpleIcon({
                    icon,
                    bgHex: theme === "light" ? "#f3f2ef" : "#080510",
                    fallbackHex: theme === "light" ? "#6e6e73" : "#ffffff",
                    minContrastRatio: theme === "dark" ? 2 : 1.2,
                    aProps: {
                        href: undefined,
                        target: undefined,
                        rel: undefined,
                        onClick: (e) => e.preventDefault(),
                    },
                })}
                <span className="mt-2 text-sm text-white dark:text-white">
                    {icon.title}
                </span>
            </div>
        ));
    }, [data, theme]);

    return (
        <div className="grid grid-cols-5 gap-4 md:grid-cols-8">
            {renderedIcons || <div>Cargando iconos...</div>}
        </div>
    );
}
