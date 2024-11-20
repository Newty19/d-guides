import { Link } from 'react-router-dom';
import guides from '../../data/guides.json';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Guías Disponibles</h1>
      <ul className="guides-list">
        {guides.map((guide) => {
          // Construir la ruta a la imagen dinámicamente
          const imagePath = require(`../../util/Images/Bosses/${guide.imageBoss}`);

          return (
            <li key={guide.id} className="guide-item">
              <Link to={`/guide/${guide.id}`} className="guide-link">
                <div className="guide-button">
                  <img 
                    src={imagePath} 
                    alt={guide.title} 
                    className="guide-image"
                  />
                  <span className="guide-button-text">{guide.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
