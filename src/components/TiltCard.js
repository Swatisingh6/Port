import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

function TiltCard({ children, className = "", maxTilt = 12, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const animate = () => {
    const target = targetRef.current;
    const current = currentRef.current;
    current.x += (target.x - current.x) * 0.15;
    current.y += (target.y - current.y) * 0.15;
    if (ref.current) {
      const scale = prefersReducedMotion ? 1 : (target.x !== 0 || target.y !== 0 ? 1.03 : 1);
      ref.current.style.transform = `perspective(800px) rotateX(${current.y}deg) rotateY(${current.x}deg) scale3d(${scale}, ${scale}, ${scale})`;
    }
    if (Math.abs(target.x - current.x) > 0.01 || Math.abs(target.y - current.y) > 0.01) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      rafRef.current = 0;
    }
  };

  const onMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    targetRef.current = { x: x * maxTilt, y: -y * maxTilt };
    if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
  };

  const onMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 };
    if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
        transition: prefersReducedMotion ? "transform 0.2s" : "none",
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
