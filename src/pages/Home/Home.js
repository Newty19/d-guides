import { Link } from 'react-router-dom';
import guides from '../../data/guides.json';
import './Home.css'; // Asegúrate de tener el archivo CSS correspondiente

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Guías Disponibles</h1>
      <ul className="guides-list">
        {guides.map((guide) => (
          <li key={guide.id} className="guide-item">
            <Link to={`/guide/${guide.id}`} className="guide-link">
              <div className="guide-button">
                <img 
                  src={guide.imageUrl} 
                  alt={guide.title} 
                  className="guide-image"
                />
                <span className="guide-button-text">{guide.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
