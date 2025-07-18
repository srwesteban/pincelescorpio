import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const DEFAULT_ITEMS = [
  {
    title: "Professional Developer",
    description: "by Digital house",
    id: 1,
    image: "/assets/certificates/PDW.png",
  },
  // {
  //   title: "Ingeniero de Software",
  //   description: "UCC.",
  //   id: 2,
  //   image: "/assets/certificates/DPIS.png",
  // },
  {
    title: "Web Designer",
    description: "DH",
    id: 3,
    image: "/assets/certificates/WD.png",
  },
  {
    title: "English Path",
    description: "B1+ English level.",
    id: 4,
    image: "/assets/certificates/EP.png",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(300);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const x = useMotionValue(0);

  const carouselItems = loop ? [...items, items[0]] : items;
  const trackItemOffset = containerWidth + GAP;

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    resize();
    const observer = new ResizeObserver(resize);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const el = containerRef.current;
      const enter = () => setIsHovered(true);
      const leave = () => setIsHovered(false);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === carouselItems.length - 1 ? (loop ? 0 : prev) : prev + 1
        );
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    carouselItems.length,
    pauseOnHover,
  ]);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <motion.div
        className="absolute inset-0 flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        }}
        style={{
          x,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + containerWidth / 2
          }px 50%`,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={isResetting ? { duration: 0 } : SPRING_OPTIONS}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div
              key={index}
              className="relative shrink-0 flex items-center justify-center bg-[#57486C] text-white rounded-lg w-full h-full box-border overflow-hidden"
              style={{
                width: containerWidth,
                height: "100%",
                rotateY,
              }}
              transition={SPRING_OPTIONS}
            >
              {/* Imagen */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain pointer-events-none select-none"
                  draggable={false}
                />
              )}

              {/* Título + descripción */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4 text-white">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center w-full">
        <div className="flex gap-2">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentIndex % items.length === index
                  ? "bg-[#9956F6]"
                  : "bg-black"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
