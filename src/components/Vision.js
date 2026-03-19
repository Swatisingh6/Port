import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

function Vision() {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Build user-first MERN apps",
      body: "I want every project to feel fast, intuitive, and accessible. I focus on clean UI and reliable full-stack behavior so users trust the product.",
      bullets: ["Responsive layouts", "Smooth interactions", "Practical feature design"],
    },
    {
      title: "Write scalable, maintainable code",
      body: "Great apps are easy to extend. I aim for modular components, predictable data flow, and solid error handling across the stack.",
      bullets: ["Reusable components", "Consistent state patterns", "Performance-aware decisions"],
    },
    {
      title: "Turn ideas into real products",
      body: "From training projects to production-ready deployments, I enjoy taking concepts and shipping them with clear goals and measurable outcomes.",
      bullets: ["Iterate quickly", "Ship with confidence", "Learn by building"],
    },
    {
      title: "Continuous learning (always)",
      body: "I practice DSA and keep exploring new tools so I can solve harder problems and improve the quality of my work.",
      bullets: ["DSA practice", "New frameworks", "Better engineering habits"],
    },
  ];

  return (
    <motion.section
      name="Vision"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14 md:py-20"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -6, boxShadow: "0 25px 60px rgba(16, 185, 129, 0.14)", transition: { duration: 0.25 } }
      }
    >
      <SpotlightCard
        radiusClass="rounded-3xl"
        glowColor="rgba(16, 185, 129, 0.22)"
        className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="md:w-5/12">
            <h1 className="text-3xl font-bold mb-2">Vision</h1>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              My vision is to grow as a software developer by building products that combine strong engineering with a modern, user-friendly experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["MERN", "UI/UX", "Scalability", "Learning"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.1, y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                  className="rounded-full border border-slate-200/80 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/40 px-3 py-1 text-sm text-slate-800 dark:text-slate-100 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="md:w-7/12 w-full">
            <div className="space-y-4">
              {items.map((item, idx) => {
                const isOpen = idx === openIndex;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setOpenIndex(idx)}
                    className="w-full text-left rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white/55 dark:bg-slate-800/40 px-4 py-4 transition hover:bg-white/80 dark:hover:bg-slate-800/60"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {item.title}
                      </span>
                      <span className="text-slate-500 dark:text-slate-300">
                        {isOpen ? "—" : "+"}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                            {item.body}
                          </p>
                          <ul className="mt-3 grid sm:grid-cols-3 gap-2">
                            {item.bullets.map((b) => (
                              <li
                                key={b}
                                className="rounded-xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-950/20 px-3 py-2 text-xs text-slate-800 dark:text-slate-100"
                              >
                                {b}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.section>
  );
}

export default Vision;

