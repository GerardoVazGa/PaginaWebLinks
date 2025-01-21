import React, { useState } from 'react'
import '../styles/Plantillas.css'
import Recuadros from '../components/Recuadros';
import BtnRegreso from '../components/BtnRegreso';
import { useNavigate } from 'react-router-dom'

const Plantillas = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [expandedImage, setExpandedImage] = useState(null);
  const navigate = useNavigate();

  const plantillas = [
    { id: 1, imageName: 'chequeo.png', title: 'Chequeo', fileUrl: 'ChequeoEnCasa.pdf' },
  ];

  function goBack() {
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  const getImageSrc = (imageName) => {
    return require(`../assets/${imageName}`);
  };

  const getArchive = (fileUrl) => {
    return require(`../assets/pdfs/${fileUrl}`)
  }

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Previene el menú contextual del clic derecho
  };

  return (
    <div className='Plantillasbody'>
      <div className='BtnRegreso'>
        <BtnRegreso onGoBack={goBack} />
      </div>
      <div className='Plantilla'>
        {plantillas.map((plantilla) => (
          <Recuadros
            key={plantilla.id}
            imageSrc={getImageSrc(plantilla.imageName)}
            title={plantilla.title}
            isAnimating={isAnimating}
            setExpandedImage={setExpandedImage}
            fileUrl={getArchive(plantilla.fileUrl)}
          />
        ))}
        {expandedImage && (
          <div className="expanded-image-modal" onClick={closeExpandedImage} onContextMenu={handleContextMenu}>
            <img
              src={expandedImage}
              alt="Imagen expandida"
              className="expanded-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Plantillas;
