import React, { useState } from "react";
import "../styles/Recuadros.css";
import { FaArrowAltCircleDown } from "react-icons/fa"

function Recuadros({ imageSrc, title, isAnimating, setExpandedImage, fileUrl }) {

  const handleImageClick = () => {
    setExpandedImage(imageSrc);
  };

  // Función para bloquear el clic derecho
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl; // Ruta al archivo importado
    link.download = `${title}.pdf`; // Nombre sugerido del archivo
    link.click();
  };

  return (
    <div className={`Recuadrosbody ${isAnimating ? "animate" : ""} `}>
      <img
        src={imageSrc}
        alt={title}
        onClick={handleImageClick} // Al hacer clic, expandir la imagen
        onContextMenu={handleContextMenu}
        className="recuadro-img"
      />
      <h4>{title}</h4>
      <button className="BtnDescarga" onClick={handleDownload}><p className='TxtBtnRec'>Descargar <FaArrowAltCircleDown /></p></button>
    </div>
  );
}

export default Recuadros;
