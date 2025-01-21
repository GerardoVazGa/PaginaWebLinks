import {useNavigate} from 'react-router-dom'
import './styles/App.css';
import { useState, useEffect } from 'react';
import { FaInstagram, FaTiktok} from "react-icons/fa6";
import { HiOutlineTemplate } from "react-icons/hi";


/*function press(){
  alert('Hola BbS');
}
*/
const image = require('./assets/yo.jpeg');

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const lastVisitedPage = sessionStorage.getItem("lastVisitedPage");

    if (lastVisitedPage) {
      navigate(lastVisitedPage);
      setIsAnimating(false)
      sessionStorage.removeItem("lastVisitedPage");
    }
  }, [navigate]);
  
  
  const handleClick = (newValue) => {
    setIsAnimating(true);

    sessionStorage.setItem("lastVisitedPage", window.location.pathname);

    setTimeout(() => {
      if (newValue === 'instagram') {
        window.location.href = "https://www.instagram.com/anel.vzq.g/?igsh=MThncnFjaXNrNmY0ZQ%3D%3D#";
      } else if (newValue === 'tiktok') {
        window.location.href = "https://www.tiktok.com/@anel.vzq?_t=ZM-8svw9GgDUGr&_r=1";
      } else if(newValue === 'plantillas'){
        navigate('/Plantillas');
      }else{
        navigate('/');
      }

      setTimeout(() => {
        setIsAnimating(false); // Desactivar la animación después de que el cambio de página haya sucedido
      }, 500); 
    }, 500); // Tiempo de duración de la animación
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className={`App-logo ${isAnimating ? 'animate' : ''}`} alt="image" />
        <h1 className={`App-name ${isAnimating ? 'animate' : ''}`}><a className='Usuario' onClick={() => handleClick('instagram')}>@anel.vzq.g</a></h1>
      </header>
      <div className="App-content">
        <div className={`App-separador ${isAnimating ? 'animate' : ''}`}>
          <button onClick={() => handleClick('instagram')}><p className="TxtBtn">Instagram <FaInstagram /></p></button>
        </div>
        <div className={`App-separador ${isAnimating ? 'animate' : ''}`}>
          <button onClick={() => handleClick('tiktok')}><p className='TxtBtn'>TikTok <FaTiktok/></p></button>
        </div>
        <div className={`App-separador ${isAnimating ? 'animate' : ''}`}>
          <button onClick={() => handleClick('plantillas')}><p className='TxtBtn'>Plantillas <HiOutlineTemplate /></p></button>
        </div>
      </div>
    </div>
  );
}

export default App;
