import React from "react";

const DownloadCVButton = ({
  url = "https://drive.google.com/file/d/1pJ99dGQkm_Xf1AKLZLAZMIRaXFKzIxZE/view",
  label = "Descargar CV",
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl border border-white bg-white/10 backdrop-blur text-white transition-colors duration-300 hover:bg-white/20"
    >
      <img
        src="/assets/logos/download.svg"
        alt="Download icon"
        className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12"
      />
      {label}
    </a>
  );
};

export default DownloadCVButton;
