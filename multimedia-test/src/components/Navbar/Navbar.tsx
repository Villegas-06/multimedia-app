import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import disneyLogo from '../../images/disney.png';

import '../../styles/navbar.css'

interface Props {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<Props> = ({ isLoggedIn, onLogout }) => {
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      onLogout();
      navigate('/login')
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/home">
          <img src={disneyLogo} alt="navbar-disneyLogo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          {!isLoggedIn && (
            <>
              <li className="navbar-element"><Link to="/login">Iniciar sesión</Link></li>
              <li className="navbar-element"><Link to="/register">Registrarse</Link></li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="navbar-element"><Link to="/home">Inicio</Link></li>
              <li className="navbar-element"><Link to="/" onClick={handleLogout}>Cerrar Sesion</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
