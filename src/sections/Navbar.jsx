import { useState } from "react";
import { motion } from "motion/react";

// Componente Navigation separado
function Navigation({ onLinkClick }) {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20; // Ajusta según la altura de tu navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const handleScrollDown = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 10;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <button className="nav-link" onClick={() => handleScroll("home")}>
          Inicio
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={() => handleScroll("about")}>
          Sobre mi
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={() => handleScroll("fotos")}>
          Fotos
        </button>
      </li>
      <li className="nav-li">
        <button className="nav-link" onClick={() => handleScroll("pinceladas")}>
          Pinceladas
        </button>
      </li>
      {/* <li className="nav-li">
        <button className="nav-link" onClick={() => handleScrollDown("contact")}>
          Contacto
        </button>
      </li> */}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/60">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/assets/logos/escorlogo.png"
              alt="William logo"
              className="w-8 h-8 sm:w-10 sm:h-10 sm:m-2 object-cover rounded-full"
            />
            <span className="sr-only">El pincel de escorpio</span>
          </a>

          {/* Botón menú hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Navegación normal en escritorio */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
