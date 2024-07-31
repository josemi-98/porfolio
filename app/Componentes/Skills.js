import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    //   "nodedotjs",
    "express",
      "nextdotjs",
    //   "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "cypress",
    "docker",
    "jira",
    "github",
    "gitlab",
    "mysql",
    "php",
    "tailwindcss",
    // "androidstudio",
    "selenium",
    "figma",
];

export function Skills() {
    return (
        // <div className="flex flex-col md:flex-row items-start justify-between">
        //     {/* Lista de habilidades */}
        //     <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white-500 list-disc list-inside dark:text-gray-400 flex-shrink-0">
        //         {slugs.map((slug, index) => (
        //             <li key={index}>{slug}</li>
        //         ))}
        //     </ul>

        //     {/* Componente IconCloud */}
        //     <div className=" flex h-full w-full items-center justify-center overflow-x-auto gap-4 rounded-lg  bg-transparent">
        //         <IconCloud iconSlugs={slugs} />
        //     </div>
        // </div>

        <div className="flex flex-wrap items-center justify-center gap-6 bg-transparent p-4 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

export default Skills;
