import ParallaxBackground from "../components/parallaxBackground";
import { Photoframe } from "../components/Photoframe";
import FadeContent from "../components/FadeContent";

const About = () => {
  return (
    <section className="relative min-h-screen" id="about">
      <ParallaxBackground />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 py-12 gap-12">

        {/* Photoframe primero en móvil */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 -mt-10 md:mt-0">
          <Photoframe />
        </div>

        {/* FadeContent debajo en móvil */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <p className="text-lg text-white text-center md:text-left max-w-md bg-black/40 border border-white rounded-xl p-6 backdrop-blur-sm">
              Hola, soy Valeria, arquitecta especialista en diseño boho.
            </p>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default About;
