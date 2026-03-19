import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

import pic from "../img/rohitImg.png";
import { ReactTyped } from "react-typed";
import { useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioContext } from "../context/PortfolioContext";
import { Link } from "react-scroll";
import SpotlightCard from "./SpotlightCard";



function Home() {
    const { AboutmeData } = useContext(portfolioContext);
    const prefersReducedMotion = useReducedMotion();
    return (
        <motion.section
            name="Home"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14 md:py-20"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
        >
            <SpotlightCard
                radiusClass="rounded-3xl"
                glowColor="rgba(16, 185, 129, 0.24)"
                className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -6,
                        boxShadow: "0 25px 60px rgba(16, 185, 129, 0.16)",
                        transition: { duration: 0.25 },
                      }
                }
            >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    <motion.div
                        className="md:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.05 }}
                    >
                        <span className="text-sm font-medium tracking-wide text-green-600">
                            Welcome In My Feed
                        </span>

                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                            Hello, I'm a{" "}
                            <ReactTyped
                                className="text-red-700"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={80}
                                backSpeed={80}
                                loop={true}
                            />
                        </h1>

                        <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-justify max-w-prose">
                            {AboutmeData}
                        </p>

                        {/* social media icons */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h2 className="font-semibold text-slate-900 dark:text-slate-100">Available on</h2>
                                <div className="text-3xl flex gap-5">
                                    {[
                                        { href: "https://github.com/Swatisingh6", Icon: FaGithub, color: "text-blue-700" },
                                        { href: "https://www.linkedin.com/in/swati-kumari8/", Icon: FaLinkedin, color: "text-blue-600" },
                                        { href: "https://x.com/AvniSingh4113", Icon: FaTwitter, color: "text-blue-600" },
                                        { href: "https://leetcode.com/u/JqjLZwhWGF/", Icon: SiLeetcode, color: "text-blue-600" },
                                    ].map(({ href, Icon, color }) => (
                                        <motion.a
                                            key={href}
                                            href={href}
                                            className={color}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={prefersReducedMotion ? undefined : { scale: 1.2, y: -4 }}
                                            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            <Icon />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                                    Currently Working on
                                </h2>
                                <div className="text-3xl flex gap-5">
                                    {[
                                        { href: "https://www.mongodb.com/", Icon: SiMongodb, color: "text-green-500" },
                                        { href: "https://react.dev/", Icon: RiReactjsLine, color: "text-blue-700" },
                                        { href: "https://expressjs.com/", Icon: SiExpress, color: "text-red-600" },
                                        { href: "https://nodejs.org/en", Icon: RiNodejsLine, color: "text-green-400" },
                                    ].map(({ href, Icon, color }) => (
                                        <motion.a
                                            key={href}
                                            href={href}
                                            className={color}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={prefersReducedMotion ? undefined : { scale: 1.2, y: -4 }}
                                            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        >
                                            <Icon />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <motion.a
                                href="https://drive.google.com/file/d/1SpuWPsjVSOsvt8rxoX0rZcvi6bCNP_Xw/view?usp=drive_link"
                                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-white font-semibold hover:bg-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }}
                                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                Resume
                            </motion.a>
                            <motion.div whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -2 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                <Link
                                    to="Contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/60 dark:border-slate-700/60 dark:bg-slate-800/40 px-5 py-2.5 text-slate-900 dark:text-slate-100 font-semibold hover:bg-white dark:hover:bg-slate-800/70"
                                >
                                    Contact me
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1 }}
                    >
                        <motion.img
                            src={pic}
                            alt="Profile"
                            className={`w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full border border-slate-200/70 dark:border-slate-700/60 object-cover ${!prefersReducedMotion ? "animate-float" : ""}`}
                            initial={prefersReducedMotion ? false : { scale: 0.95 }}
                            animate={prefersReducedMotion ? undefined : { scale: 1 }}
                            whileHover={prefersReducedMotion ? undefined : { y: -12, scale: 1.03, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    </motion.div>
                </div>
            </SpotlightCard>
        </motion.section>
    )
}

export default Home;