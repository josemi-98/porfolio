import LinkInline from "./LinkInline";

const ExperienceItem = ({ title, company, description, link, date }) => {
    return (
        <div className="relative mx-12 pb-12 grid before:absolute before:left-[-30px] before:block before:h-full before:border-l-2 before:border-white/45 dark:before:border-white/15 before:content-[''] md:grid-cols-4 md:gap-10">
            <div className="relative pb-12 md:col-span-1">
                <div className="sticky top-0">
                    <span className="text-yellow-400 -left-[46px] absolute rounded-full text-5xl">
                        <svg
                            class="h-8 w-8 "
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <rect
                                x="3"
                                y="4"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                            />{" "}
                            <line x1="16" y1="2" x2="16" y2="6" />{" "}
                            <line x1="8" y1="2" x2="8" y2="6" />{" "}
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </span>
                    <h3 className="text-xl font-bold text-yellow-400">
                        {title}
                    </h3>
                    <h4 className="font-semibold text-xl text-white-600 dark:text-white">
                        {company}
                    </h4>
                    <time className="p-0 m-0 text-sm text-white-600/80 dark:text-white/80">
                        {date}
                    </time>
                </div>
            </div>
            <div className="relative flex flex-col gap-2 pb-4 text-white-600 dark:text-white-300 md:col-span-3">
                {description}
                {link && (
                    <LinkInline href={link}>
                        Página web{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </LinkInline>
                )}
            </div>
        </div>
    );
};

export default ExperienceItem;
