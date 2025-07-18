import { useMemo } from "react";
import Masonry from "../components/Masonry";

const Projects = () => {
  const imageCount = 7;

  const items = useMemo(() => {
    return Array.from({ length: imageCount }, (_, index) => ({
      id: `img-${index + 1}`,
      img: `/assets/projectsPhotos/${index + 1}.png`,
      height: 400 + Math.floor(Math.random() * 300),
    }));
  }, []);

  return (
    <section className="relative c-space section-spacing">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </section>
  );
};

export default Projects;
