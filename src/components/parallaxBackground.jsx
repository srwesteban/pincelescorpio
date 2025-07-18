import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/10">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background boho */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/background2.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* Mountain Layer 3 */}
        {/* <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        /> */}

        {/* Planets */}
        {/* <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        /> */}

        {/* Mountaine Layer 2 */}
        {/* <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        /> */}

        {/* bohoflower (rotating in bottom-left corner) */}
        <motion.div
          className="absolute left-0 bottom-0 z-10 w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          <img
            src="/assets/bohoflower.webp"
            alt="Bohoflower"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Mountaine Layer 1 */}
        {/* <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/capa2.webp)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        /> */}
      </div>
    </section>
  );
};

export default ParallaxBackground;
