
import java from '../img/java.png';
import Python from '../img/python.webp';
import mongodb from '../img/mongodb.jpg';
import node from '../img/node.png';
import reactjs from '../img/reactjs.png';
import css from '../img/css.jpg';
import spring from '../img/spring.png';
import html from '../img/html.png';
import springboot from '../img/springBoot.jpg';
import { motion, useReducedMotion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

function Experiance(){
    const prefersReducedMotion = useReducedMotion();
    const cardItems=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:4,
            logo:java,
            name:"Java"
        },
        {
            id:5,
            logo:Python,
            name:"Python"
        },
        {
            id:6,
            logo:reactjs,
            name:"ReactJs"
            
        },
        {
            id:7,
            logo:spring,
            name:"Spring"
        },
        {
            id:8,
            logo:springboot,
            name:"SpringBoot"
        },
        {
            id:9,
            logo:node,
            name:"NodeJs"
        }
    ]

    return (
        <motion.section
            name="Experience"
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
                        boxShadow: "0 25px 60px rgba(59, 130, 246, 0.12)",
                        transition: { duration: 0.25 },
                      }
            }
        >
            <SpotlightCard
                radiusClass="rounded-3xl"
                glowColor="rgba(59, 130, 246, 0.22)"
                className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
            >
                <h1 className="text-3xl font-bold mb-3 text-slate-900 dark:text-slate-100">Experience</h1>
                <span className="underline decoration-green-500 underline-offset-4">
                    Features Project
                </span>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 pt-6">
                    {cardItems.map(({ id, logo, name }) => (
                        <motion.div
                            key={id}
                            className="h-[180px] rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/40 shadow-sm flex flex-col items-center justify-center p-4 cursor-pointer"
                            whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                            transition={{ duration: 0.25 }}
                        >
                            <img
                                className="w-[95px] h-[95px] rounded-2xl object-contain"
                                src={logo}
                                alt={name}
                            />
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                    {name}
                                </h2>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SpotlightCard>
        </motion.section>
    )
}

export default Experiance;