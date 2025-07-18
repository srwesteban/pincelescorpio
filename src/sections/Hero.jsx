import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrophySpin } from "react-loading-indicators";
import BlurText from "../components/Blurtext";
import PixelTransition from "../components/PixelTransition";

const backgroundImageUrl = "/assets/background.jpg";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  // Preload de imagen
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageUrl;
    img.onload = () => setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-white z-50">
        <TrophySpin color="#32cd32" size="medium" />
      </div>
    );
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background animado */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* Grid con contenido */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 place-items-center sm:min-h-screen text-black gap-8 px-4 py-16 sm:py-6">
        {/* Columna 1: BlurText con fondo */}
        <div
          className="relative w-full max-w-sm md:max-w-md mx-auto overflow-hidden rounded-xl bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url('/assets/pin.png')`,
            aspectRatio: "2 / 1",
          }}
        >
          <div className="w-full h-full flex items-center justify-center p-4 text-center rounded-xl">
            <BlurText
              text="Bienvenido al pincel de escorpio"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-base md:text-xl cinzel-decorative-bold leading-tight"
            />
          </div>
        </div>

        {/* Columna 2: PixelTransition */}
        <div className="w-full px-4">
          <PixelTransition
            firstContent={
              <img
                src="/assets/a.jpg"
                alt="Primera imagen"
                className="w-full h-full object-cover"
              />
            }
            secondContent={
              <img
                src="/assets/b.jpg"
                alt="Segunda imagen"
                className="w-full h-full object-cover"
              />
            }
            gridSize={12}
            pixelColor="#CCBCA9"
            animationStepDuration={0.4}
            className="w-full max-w-sm md:max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
