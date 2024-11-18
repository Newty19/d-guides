import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Guide from './pages/Guide/Guide';
import Navbar from './pages/Navbar/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide/:id" element={<Guide />} />
      </Routes>
    </Router>
  );
}
export default App;
