import Image from "next/image";
const AboutMe = ({ children }) => {
    return (
        <article className="flex flex-col items-center justify-center gap-8 text-white-700 dark:text-white-300 md:flex-row">
            <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 text-pretty order-2 md:order-1">
                <p>
                    Me llamo José Miguel, aunque prefiero Josemi. Empecé
                    en la programación con el ciclo superior de Técnico de Aplicaciones Multiplataforma.
                    Actualmente estoy {" "}
                    <strong>
                        buscando una oportunidad laboral como desarrolador web.
                    </strong>
                    {" "}
                    De este modo, seguir desarrollando mis habilidades y contribuir a proyectos innovadores. 
                </p>


                <p>
                    Soy Programador Junior enfocado en el desarrolo web. Con experiencia profesional en {" "}
                    <strong>
                        desarrollo web y testing.
                    </strong>
                    {" "}
                    He trabajado en grupos pequeños, fomentando
                    mis habilidades de colaboración y trabajo en equipo.    
                </p>

                <p>
                Mi trayectoria personal y
                profesional me ha enseñado la importancia del {" "}
                    <strong>
                    esfuerzo, la proactividad y la constancia.
                    </strong>
                    {" "}
                    Aprendo rápido y, en general, trato de conseguir lo que me propongo.
                </p>
            </div>
            <Image
                width="200"
                height="200"
                src="/yo.png"
                alt="Imagen de José Miguel Martín"
                className="order-1 object-cover w-64 h-full p-1 md:order-2 lg:p-2 lg:w-64 aspect-square rounded-2xl "
                style={{ objectPosition: "50% 50%" }}
            />

            {children}
        </article>
    );
};

export default AboutMe;
