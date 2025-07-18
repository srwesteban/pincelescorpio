import Carousel from "../components/Carousel";

const Certificates = () => {
  return (
    <section className="c-space sm:section-spacing sm:pb-30" id="certificates">
      <h2 className="text-heading mb-10 text-center mt-10 sm:mt-0">Certificados</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 mt-12">
        <div className="p-0 m-0 w-full h-[300px] sm:h-[400px] md:h-[50rem] flex items-center justify-center rounded-none md:rounded-3xl">
          <Carousel
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
