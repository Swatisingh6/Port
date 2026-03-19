
import { motion, useReducedMotion } from "framer-motion";
import { portfolioContext } from '../context/PortfolioContext';
import { useContext } from 'react';
import SpotlightCard from "./SpotlightCard";

function Portfolio(){
    const {ProjectItems}=useContext(portfolioContext);
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.section
            name="Portfolio"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14 md:py-20"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
            whileHover={
                prefersReducedMotion
                    ? undefined
                    : {
                        y: -6,
                        boxShadow: "0 25px 60px rgba(59, 130, 246, 0.14)",
                        transition: { duration: 0.25 },
                      }
            }
        >
            <SpotlightCard
                radiusClass="rounded-3xl"
                glowColor="rgba(59, 130, 246, 0.24)"
                className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
            >
                <div>
                    <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
                    <span className="underline decoration-green-500 underline-offset-4">
                        Features Project
                    </span>

                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 pt-6">
                        {ProjectItems.map(({ id, logo, name }) => (
                            <motion.div
                                key={id}
                                className="rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/40 shadow-sm cursor-pointer overflow-hidden"
                                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="p-6 flex flex-col gap-4 text-center">
                                    <img
                                        src={logo}
                                        alt={name}
                                        className="w-20 h-20 mx-auto rounded-2xl object-contain"
                                    />
                                    <div>
                                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                            {name}
                                        </h2>
                                    </div>

                                    <div className="flex flex-row justify-between gap-3">
                                        <button
                                            type="button"
                                            className="flex-1 rounded-xl bg-blue-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                                        >
                                            Video
                                        </button>
                                        <button
                                            type="button"
                                            className="flex-1 rounded-xl bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                                        >
                                            Source Code
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SpotlightCard>
        </motion.section>
    )
}

export default Portfolio;