import { useParams } from 'react-router-dom';
import guides from '../../data/guides.json';
import BackButton from '../../util/Back/Back';
import './Guide.css';

function Guide() {
  const { id } = useParams(); // Obtener el ID de la URL
  const guide = guides.find((g) => g.id === parseInt(id)); // Buscar la guía en el JSON
  
  if (!guide) {
    return <h2 className="guide-error">Guía no encontrada</h2>; // Mostrar error si no existe la guía
  }

  const imagePath = require(`../../util/Images/Bosses/${guide.imageBoss}`); // Construye la ruta dinámica

  return (
    <div className="guide-container">
      <h1 className="guide-title">{guide.title}</h1>
      <p className="guide-content">{guide.content}</p>
      
      <div className="video-container">
        <iframe 
          width="100%" 
          height="315" 
          src={guide.url} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="top-title">
        <img src={imagePath} alt="Minilubo Albino"/>
        <div>
          <h2>Logros</h2>
          <ul>
            {Object.entries(guide.logros).map(([key, logro], index) => (
              <li key={index} className="tooltip-container">
                {logro.nombre}
                <div className="tooltip">{logro.descripcion}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="back-button">
        <BackButton />
      </div>
    </div>
  );
}

export default Guide;
