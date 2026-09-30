"use client";
import { useEffect, useRef, useState } from "react";

/* Animated node network behind the hero. Nodes drift and link up when close;
   the cursor acts as an extra node that pulls in connections. */
export function NetworkCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
<<<<<<< HEAD
    let w, h, dpr, nodes, raf, LINK = 130, visible = true, lastT = 0, small = false;
=======
    let w, h, dpr, nodes, raf;
>>>>>>> e9a00cb57efdb257b473022f5a4f88408b23697c
    const mouse = { x: -9999, y: -9999 };
    const COLORS = ["34,211,238", "99,102,241", "168,85,247"];

    const init = () => {
<<<<<<< HEAD
      w = canvas.clientWidth; h = canvas.clientHeight;
      small = w < 768 || window.matchMedia("(hover: none)").matches;
      dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(small ? 45 : 90, (w * h) / 14000));
      LINK = small ? 115 : 130;
=======
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (w * h) / 14000));
>>>>>>> e9a00cb57efdb257b473022f5a4f88408b23697c
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8, c: COLORS[(Math.random() * COLORS.length) | 0],
      }));
    };

<<<<<<< HEAD
    const draw = (t = 0) => {
      // Skip work while the hero is off-screen or the tab is hidden.
      // Phones redraw at ~30fps, which looks the same for slow-drifting dots.
      if (!visible || document.hidden || (small && t - lastT < 32)) {
        if (!reduce) raf = requestAnimationFrame(draw);
        return;
      }
      lastT = t;
      ctx.clearRect(0, 0, w, h);
=======
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const LINK = 130;
>>>>>>> e9a00cb57efdb257b473022f5a4f88408b23697c
      for (const n of nodes) {
        if (!reduce) { n.x += n.vx; n.y += n.vy; }
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${a.c},${(1 - d / LINK) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 180) {
          ctx.strokeStyle = `rgba(103,232,249,${(1 - dm / 180) * 0.6})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${n.c},0.9)`;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
<<<<<<< HEAD
    // Phones fire "resize" when the address bar hides; only rebuild on width changes.
    let lastW = 0;
    const onResize = () => {
      if (canvas.clientWidth === lastW) return;
      lastW = canvas.clientWidth; cancelAnimationFrame(raf); init(); draw();
    };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);

    lastW = canvas.clientWidth; init(); draw();
=======
    const onResize = () => { cancelAnimationFrame(raf); init(); draw(); };

    init(); draw();
>>>>>>> e9a00cb57efdb257b473022f5a4f88408b23697c
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
<<<<<<< HEAD
      io.disconnect();
=======
>>>>>>> e9a00cb57efdb257b473022f5a4f88408b23697c
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

/* Types out each role, then deletes it and moves to the next. */
export function Typer({ words }) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0, pos = words[0].length, deleting = true, t;
    const tick = () => {
      const word = words[i];
      if (deleting) {
        pos--;
        if (pos <= 0) { deleting = false; i = (i + 1) % words.length; }
      } else {
        pos++;
        if (pos >= words[i].length) { deleting = true; setText(words[i]); t = setTimeout(tick, 1800); return; }
      }
      setText((deleting ? word : words[i]).slice(0, Math.max(pos, 0)));
      t = setTimeout(tick, deleting ? 35 : 70);
    };
    t = setTimeout(tick, 2200);
    return () => clearTimeout(t);
  }, [words]);
  return (
    <span>
      <span className="grad-text">{text}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

/* Page-wide effects: scroll reveal and cursor-tracking glow on .spot cards. */
export function Effects() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((e) => io.observe(e));
    } else els.forEach((e) => e.classList.add("in"));
    const safety = setTimeout(() => els.forEach((e) => e.classList.add("in")), 5000);

    const onMove = (e) => {
      const card = e.target.closest?.(".spot");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove);
    return () => { io?.disconnect(); clearTimeout(safety); document.removeEventListener("pointermove", onMove); };
  }, []);
  return null;
}

export function CopyButton({ text, label, className = "" }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1800); } catch {}
      }}
    >
      {done ? "Copied ✓" : label}
    </button>
  );
}
