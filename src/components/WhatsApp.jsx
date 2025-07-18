import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "573213191928";
  const message = "Hola, Valeria";

  const handleClick = () => {
    try {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error al abrir WhatsApp. Verifica tu conexión.");
    }
  };

  return (
    <button
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 p-3 bg-[#B5A188] rounded-full shadow-lg hover:scale-105 transition-transform"
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="/assets/socials/whatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6 sm:w-9 sm:h-9 object-contain"
      />
    </button>
  );
};

export default WhatsAppButton;
