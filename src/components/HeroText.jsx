import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["Seguro", "Moderno", "Escalable"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Escritorio */}
      <div className="hidden md:flex flex-col space-y-4">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Bienvenido!
        </motion.h1>
        <motion.p
          className="text-5xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          Desarrollo software
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <FlipWords words={words} className="font-black text-white text-8xl" />
        </motion.div>
      </div>

      {/* Móvil */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Bienvenido!
        </motion.p>
        <motion.p
          className="text-4xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          Desarrollo software
        </motion.p>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <FlipWords words={words} className="font-bold text-white text-6xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
