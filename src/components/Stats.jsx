import { useEffect, useRef, useState } from "react";
import { stats } from "../data/content";

function useCountUp(target, active, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function StatItem({ stat, active }) {
  const value = useCountUp(stat.value, active);
  return (
    <div className="stats__item">
      <span className="stats__num">
        {value}
        {stat.suffix}
      </span>
      <span className="stats__label">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__overlay" />
      <div className="container stats__inner">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
