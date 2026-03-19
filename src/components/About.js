import { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioContext } from "../context/PortfolioContext";
import SpotlightCard from "./SpotlightCard";
import TiltCard from "./TiltCard";

function About() {
    const { AboutData } = useContext(portfolioContext);
    const prefersReducedMotion = useReducedMotion();

    const formatWithNewLine = (text) => {
        if (typeof text === "string") {
            return text.split(',').map((item, index) => (
                <div key={index}>{item.trim()}</div>
            ));
        }
        if (Array.isArray(text)) {
            return text.map((item, index) => {
                if (typeof item === 'string') return <div key={index}>{item}</div>;
                if (typeof item === 'object') return <div key={index}>{item.name}</div>;
                return null;
            });
        }
        return null;
    };

    const ImageCard = ({ imgUrl, name }) => (
        <motion.li
            className="list-none"
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.4 }}
        >
            <TiltCard
                maxTilt={14}
                className="flex flex-col items-center rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-950/20 text-center p-3 shadow-sm hover:shadow-2xl transition duration-300 dark:hover:shadow-2xl cursor-default"
            >
                <img
                    src={imgUrl}
                    alt={`${name} icon`}
                    className="w-16 h-16 rounded-xl mb-2 object-contain"
                />
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{name}</span>
            </TiltCard>
        </motion.li>
    );

    if (!AboutData) return <p>Loading...</p>;

    return (
        <motion.section
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14 md:py-20 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={
                prefersReducedMotion
                    ? undefined
                    : {
                        y: -6,
                        boxShadow: "0 25px 60px rgba(16, 185, 129, 0.14)",
                        transition: { duration: 0.25 },
                      }
            }
        >
            <SpotlightCard
                radiusClass="rounded-3xl"
                glowColor="rgba(16, 185, 129, 0.22)"
                className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
            >
                <motion.h1
                    className="text-3xl font-bold mb-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About
                </motion.h1>
                <p className="text-slate-700 dark:text-slate-200">
                    Aspiring Software Engineer | Building command in MERN Stack Web Development | Data Science
                </p>
                <br />
                {/* -------------------------------------------------- Education and Training -------------------------------------------------- */}
                <motion.h2 className="text-green-500 font-semibold text-xl">Education & Training</motion.h2>
                {AboutData.education?.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex gap-2 items-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                        <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-slate-300">
                      {item.institution} ({item.duration})
                    </p>
                    </motion.div>
                ))}
                <br />
                {/* -------------------------------------------------- Skills & Experience ------------------------------------------------ */}
                <motion.h2 className="text-green-500 font-semibold text-2xl">Skill & Experience</motion.h2>
                {AboutData.skill_experience?.map((item, idx) => (
                    <div key={idx} className="mb-4">
                        <p className="font-semibold">{item.category}</p>
                        {item.category !== "Soft Skills" ? (
                            <motion.ul
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 border border-slate-200/70 dark:border-slate-700/60 rounded-2xl bg-white/60 dark:bg-slate-950/20 text-sm"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.15
                                        }
                                    }
                                }}
                            >
                                {item.skills.map((skill, i) => (
                                    <ImageCard key={i} imgUrl={skill.imgUrl} name={skill.name} />
                                ))}
                            </motion.ul>

                        ) : (
                            <ul className="flex flex-wrap gap-3 ml-0 list-none">
                                {item.skills.map((skill, i) => (
                                    <motion.li
                                        key={i}
                                        className="inline-block"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                    >
                                        <motion.span
                                            className="inline-block rounded-full border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-100"
                                            whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -2 }}
                                            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            {skill.name}
                                        </motion.span>
                                    </motion.li>
                                ))}
                            </ul>
                        )}

                    </div>
                ))}


                <br />

                {/* ------------------------------------------------------- certifications ----------------------------------------------------- */}
                <motion.h2 className="text-green-500 font-semibold text-xl">Certificates</motion.h2>
                <motion.ul
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4 border border-slate-200/70 dark:border-slate-700/60 rounded-2xl bg-white/60 dark:bg-slate-950/20 p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}>
                    {AboutData.certificates?.map((cert, index) => (
                        <motion.li
                            key={index}
                            className="list-none"
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                        >
                            <TiltCard
                                maxTilt={8}
                                className="bg-white dark:bg-slate-800/60 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 border border-slate-200/70 dark:border-slate-700/60 overflow-hidden"
                            >
                                <img
                                    src={cert.img}
                                    alt={cert.title}
                                    className="w-full object-cover rounded-xl mb-3"
                                />
                                <div className="flex justify-between items-center">
                                    <h3 className="text-md w-60 font-semibold text-gray-900 dark:text-slate-100 mb-1">{cert.title}</h3>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-slate-300">{cert.institution}</p>
                                        <p className="text-sm text-gray-500 dark:text-slate-400">{cert.duration}</p>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.li>
                    ))}
                </motion.ul>
                <br />

                {/* --------------------------------------------------- Professional Experience---------------------------------------- */}

                <motion.h2 className="text-green-500 font-semibold text-xl">Professional Experience</motion.h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 p-2 border border-slate-200/70 dark:border-slate-700/60 rounded-2xl bg-white/60 dark:bg-slate-950/20">
                    {AboutData.professional_experience?.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <TiltCard
                                maxTilt={6}
                                className="mb-2 border border-slate-200/70 dark:border-slate-700/60 rounded-2xl bg-white/60 dark:bg-slate-950/20 p-4 min-h-96 hover:shadow-2xl transition-shadow duration-300"
                            >
                            <p className="font-semibold flex gap-2 items-center m-2 justify-between text-lg">
                                <p>{index + 1}. {exp.title}, <span className="italic">{exp.company}</span></p>
                                <span className="text-sm text-gray-600"> ({exp.duration})</span>

                            </p>

                            <img
                                className="w-24 h-24 object-contain shadow-md rounded-sm"
                                src={exp.imgUrl}
                                alt={exp.imgUrl}
                            />

                            <div className="flex my-4">
                                <p className="flex items-center text-md w-32">
                                    Tech Used:
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    {exp.techUsed.map((point, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.03 }}
                                            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                                            className="bg-blue-500 dark:bg-blue-600 rounded-lg px-2 py-1 text-white text-sm font-medium"
                                        >
                                            {point}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-between mx-8 mb-4">
                                <a
                                    href={exp.deployedLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                                >
                                    Deployed Link
                                </a>
                                <a
                                    href={exp.gitHubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                                >
                                    GitHub Link
                                </a>

                            </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
                <br />

                {/* ------------------------------------------------------- Achievements -------------------------------------------------- */}

                <motion.h2 className="text-green-500 font-semibold text-xl">Achievements & Awards</motion.h2>
                {formatWithNewLine(AboutData.achievements)}
                <br />
                {/* ------------------------------------------------Mission Statement -------------------------------------------------- */}
                <motion.h2 className="text-green-500 font-semibold text-xl">Mission Statement</motion.h2>
                {formatWithNewLine(AboutData.mission_statement)}

                <hr className="mt-5" />
            </SpotlightCard>
        </motion.section>
    );
}

export default About;
