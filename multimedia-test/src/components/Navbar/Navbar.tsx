import React from 'react';
import '../../styles/navbar.css';
import disneyLogo from '../../images/disney.png';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a href="/">
          <img src={disneyLogo} alt="navbar-disneyLogo" className="navbar-logo" />
        </a>
        <ul className="navbar-links">
          <li className="navbar-element"><a href="/">Inicio</a></li>
          <li className="navbar-element"><a href="/perfil">Perfil</a></li>
          <li className="navbar-element"><a href="/configuracion">Configuración</a></li>
          <li className="navbar-element"><a href="/salir">Salir</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
