import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

function SpotlightCard({
  children,
  className = "",
  radiusClass = "rounded-3xl",
  glowColor = "rgba(16, 185, 129, 0.22)",
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const rafRef = useRef(0);
  const latest = useRef({ x: 0, y: 0 });

  const applyGlow = () => {
    rafRef.current = 0;
    if (!overlayRef.current) return;

    const { x, y } = latest.current;
    overlayRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, rgba(59, 130, 246, 0.00) 55%)`;
  };

  const onMouseMove = (e) => {
    if (prefersReducedMotion) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    latest.current.x = e.clientX - rect.left;
    latest.current.y = e.clientY - rect.top;

    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(applyGlow);
  };

  const onMouseEnter = () => {
    if (prefersReducedMotion) return;
    if (!overlayRef.current) return;
    overlayRef.current.style.opacity = "1";
  };

  const onMouseLeave = () => {
    if (prefersReducedMotion) return;
    if (!overlayRef.current) return;
    overlayRef.current.style.opacity = "0";
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      <div
        ref={overlayRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${radiusClass} opacity-0 transition-opacity duration-200`}
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.00), rgba(59, 130, 246, 0.00) 55%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default SpotlightCard;

