import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="nav-container">
        <button className="nav-button" onClick={() => navigate('/')}> 
          <FaHome className="icon" /> Home
        </button>
        <button className="nav-button" onClick={() => navigate('/About_us')}> 
          <FaInfoCircle className="icon" /> About Us
        </button>
      </nav>
    </header>
  );
};

export default Header;