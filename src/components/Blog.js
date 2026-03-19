import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import TiltCard from "./TiltCard";

function Blog() {
  const prefersReducedMotion = useReducedMotion();
  const [activePostId, setActivePostId] = useState(null);

  const posts = useMemo(
    () => [
      {
        id: "ui-systems",
        title: "Designing modern UI systems with Tailwind",
        date: "2026",
        tags: ["Tailwind", "UI/UX", "Components"],
        excerpt:
          "How I keep spacing, typography, and states consistent while building responsive portfolio sections.",
        content: [
          "A modern UI is not just visuals—it's consistency. I start with a spacing scale and then reuse patterns across sections (cards, buttons, grids).",
          "For interactions, I combine Tailwind hover states with Framer Motion entrance/hover animations to create a smooth, premium feel.",
          "Finally, I make everything responsive by using container widths, grid breakpoints, and readable text sizes.",
        ],
      },
      {
        id: "mern-fullstack",
        title: "MERN full-stack workflow that actually scales",
        date: "2026",
        tags: ["MERN", "State", "APIs"],
        excerpt:
          "My approach to building features end-to-end: UI → API → data model → deployment.",
        content: [
          "I treat the UI and API together. If the UI needs a state, the API needs the right data shape and validation.",
          "I prefer modular components and predictable state, so future changes are easy and safe.",
          "Before deployment, I check error states and loading flows—because real users hit edge cases.",
        ],
      },
      {
        id: "learning-dsa",
        title: "DSA practice: turning problem-solving into product thinking",
        date: "2026",
        tags: ["DSA", "Problem Solving"],
        excerpt:
          "How DSA improves my product decisions: performance, structure, and clarity.",
        content: [
          "DSA strengthens my ability to reason about performance and complexity.",
          "It also improves code structure—naming, separation of concerns, and readable logic.",
          "When building products, I use these habits to make features faster and more maintainable.",
        ],
      },
    ],
    []
  );

  const activePost = posts.find((p) => p.id === activePostId) || null;

  return (
    <motion.section
      name="Blog"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14 md:py-20"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -6, boxShadow: "0 25px 60px rgba(59, 130, 246, 0.14)", transition: { duration: 0.25 } }
      }
    >
      <SpotlightCard
        radiusClass="rounded-3xl"
        glowColor="rgba(59, 130, 246, 0.22)"
        className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 p-6 md:p-10 shadow-sm backdrop-blur"
      >
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div>
            <h1 className="text-3xl font-bold mb-2">Blog</h1>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Small notes from my learning journey—UI, MERN, and DSA—written in a way I can reuse in real projects.
            </p>
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-300">
            Click a post to read.
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
          {posts.map((post) => (
            <TiltCard key={post.id} maxTilt={10} className="rounded-2xl">
              <motion.button
                type="button"
                className="w-full text-left rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white/55 dark:bg-slate-800/40 p-5 shadow-sm hover:bg-white/80 dark:hover:bg-slate-800/70 transition-colors h-full"
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setActivePostId(post.id)}
              >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                  {post.title}
                </h2>
                <span className="text-xs px-2 py-1 rounded-full border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-950/20 text-slate-700 dark:text-slate-200">
                  {post.date}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/60 px-2 py-1 text-slate-700 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              </motion.button>
            </TiltCard>
          ))}
        </div>

        <AnimatePresence>
          {activePost && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-slate-950/50"
                onClick={() => setActivePostId(null)}
                aria-hidden="true"
              />
              <motion.div
                className="relative w-full max-w-2xl rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/90 dark:bg-slate-900/80 backdrop-blur p-6 md:p-8 shadow-2xl"
                initial={prefersReducedMotion ? false : { y: 18, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? false : { y: 10, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {activePost.title}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {activePost.date} • {activePost.tags.join(" • ")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivePostId(null)}
                    className="rounded-xl px-3 py-2 border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/40 hover:bg-white/90 dark:hover:bg-slate-800/70 transition"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {activePost.content.map((p, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <div className="text-xs text-slate-600 dark:text-slate-300">
                    Tip: you can replace these with your real posts later.
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivePostId(null)}
                    className="rounded-xl bg-blue-600 hover:bg-blue-700 transition px-4 py-2 text-white font-semibold"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </SpotlightCard>
    </motion.section>
  );
}

export default Blog;

