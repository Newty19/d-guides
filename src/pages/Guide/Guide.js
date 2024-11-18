import { useParams } from 'react-router-dom';
import guides from '../../data/guides.json';
import BackButton from '../../util/Back/Back';
import { Link } from 'react-router-dom';
import './Guide.css'; // Asegúrate de crear un archivo de estilos

function Guide() {
  const { id } = useParams(); // Obtener el ID de la URL
  const guide = guides.find((g) => g.id === parseInt(id)); // Buscar la guía en el JSON
  
  if (!guide) {
    return <h2 className="guide-error">Guía no encontrada</h2>; // Mostrar error si no existe la guía
  }

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
      
      <div className="back-button">
        <BackButton />
      </div>
    </div>
  );
}

export default Guide;
