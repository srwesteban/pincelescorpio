import { useEffect, useRef, useState } from "react";

export function Photoframe() {
  const ref = useRef();
  const [falling, setFalling] = useState(true);
  const [swinging, setSwinging] = useState(false);
  const [hovered, setHovered] = useState(false);

  const startY = -200;
  const targetY = -40;
  const fallSpeed = 200;
  const duration = 3;
  const amplitude = 15;
  const frequency = Math.PI * 2.5;
  const damping = 2;

  useEffect(() => {
    if (!ref.current) return;

    let y = startY;
    let lastTime = performance.now();

    const animateFall = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      y += fallSpeed * delta;
      if (y >= targetY) {
        y = targetY;
        ref.current.style.transform = `translateY(${y}px)`;
        setFalling(false);
        setSwinging(true);
        return;
      }

      ref.current.style.transform = `translateY(${y}px)`;
      requestAnimationFrame(animateFall);
    };

    requestAnimationFrame(animateFall);
  }, []);

  useEffect(() => {
    if (!swinging || !ref.current) return;

    let start = performance.now();

    const animateSwing = (now) => {
      const t = (now - start) / 1000;
      const decay = Math.exp(-damping * t);
      const angle = amplitude * decay * Math.cos(frequency * t);
      ref.current.style.transform = `translateY(${targetY}px) rotate(${angle}deg)`;

      if (t < duration) {
        requestAnimationFrame(animateSwing);
      } else {
        ref.current.style.transform = `translateY(${targetY}px) rotate(0deg)`;
        setSwinging(false);
      }
    };

    requestAnimationFrame(animateSwing);
  }, [swinging]);

  useEffect(() => {
    if (!ref.current || falling || swinging) return;

    let anim;
    const animateHover = () => {
      const t = performance.now();
      const offset = 2 * Math.sin(t * 0.015);
      ref.current.style.transform = `translateY(${targetY}px) translateX(${offset}px)`;
      anim = requestAnimationFrame(animateHover);
    };

    if (hovered) {
      animateHover();
    } else {
      cancelAnimationFrame(anim);
      ref.current.style.transform = `translateY(${targetY}px)`;
    }

    return () => cancelAnimationFrame(anim);
  }, [hovered, falling, swinging]);

  return (
    <div
      className="w-[250px] md:w-[250px]"
      style={{
        pointerEvents: "auto",
        userSelect: "none",
      }}
    >
      <img
        ref={ref}
        src="/assets/bohoframe.png"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "100%",
          transform: `translateY(${startY}px)`,
        }}
      />
    </div>
  );
}
