import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

function Footer(){
    const year = new Date().getFullYear();
    const prefersReducedMotion = useReducedMotion();
    return(
        <motion.footer
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 pb-10"
            whileHover={
                prefersReducedMotion
                    ? undefined
                    : {
                        y: -4,
                        boxShadow: "0 25px 60px rgba(99, 102, 241, 0.14)",
                        transition: { duration: 0.25 },
                      }
            }
        >
            <SpotlightCard
                radiusClass="rounded-3xl"
                glowColor="rgba(99, 102, 241, 0.22)"
                className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-row gap-5 text-3xl">
                        {[
                            { href: "https://www.facebook.com/", Icon: FaFacebook, h: "hover:text-blue-600 dark:hover:text-blue-400" },
                            { href: "https://www.instagram.com/", Icon: FaInstagram, h: "hover:text-rose-600 dark:hover:text-rose-400" },
                            { href: "https://x.com/AvniSingh4113", Icon: FaTwitter, h: "hover:text-blue-600 dark:hover:text-blue-400" },
                            { href: "https://www.linkedin.com/in/swati-kumari8/", Icon: FaLinkedin, h: "hover:text-blue-700 dark:hover:text-blue-400" },
                        ].map(({ href, Icon, h }) => (
                            <motion.a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-slate-600 dark:text-slate-300 transition-colors ${h}`}
                                whileHover={prefersReducedMotion ? undefined : { scale: 1.15, y: -3 }}
                                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300">
                        &copy; {year} Swati Singh. All rights reserved.
                    </p>
                </div>
            </SpotlightCard>
        </motion.footer>
    )
}

export default Footer;