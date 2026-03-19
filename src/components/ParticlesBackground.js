import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";

function ParticlesBackground() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const config = useMemo(
    () => ({
      maxParticles: 90,
      linkDistance: 110,
      baseSpeed: 0.35,
    }),
    []
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let rafId = 0;

    const rand = (min, max) => min + Math.random() * (max - min);
    const particles = [];

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      // Reset transform so we can draw in CSS pixels.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const areaFactor = Math.min(1.0, (w * h) / (1200 * 800));
      const count = Math.floor(config.maxParticles * (0.65 + areaFactor * 0.35));

      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const radius = rand(1.1, 2.2);
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-1, 1) * config.baseSpeed,
          vy: rand(-1, 1) * config.baseSpeed,
          r: radius,
          hue: rand(180, 220), // bluish
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Subtle vignette for readability.
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.2, 40, w * 0.5, h * 0.2, Math.max(w, h));
      grad.addColorStop(0, "rgba(34, 197, 94, 0.05)");
      grad.addColorStop(0.35, "rgba(59, 130, 246, 0.05)");
      grad.addColorStop(1, "rgba(15, 23, 42, 0.0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges.
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, 0.45)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Lines between nearby particles.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.linkDistance) {
            const alpha = (1 - dist / config.linkDistance) * 0.25;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      rafId = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafId = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafId);
    };
  }, [config, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      aria-hidden="true"
    />
  );
}

export default ParticlesBackground;

