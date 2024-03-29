import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import Swal from 'sweetalert2';

interface Props {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.trim()) {
      setError('Por favor ingresa un correo electrónico');
      return;
    }

    if (!password || !password.trim()) {
      setError('Por favor ingresa una contraseña');
      return;
    }

    try {
      await onLogin(email, password);
      
      await Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesión Exitoso!',
        text: 'Bienvenido de nuevo',
        confirmButtonText: 'Ok'
      });

      navigate('/home');
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailInputChange}
              placeholder="correo@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordInputChange}
              placeholder="Contraseña"
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button className="login-submit" type="submit">Iniciar Sesión</button>
          <p className='register-account'>Deseas registrarte? Registrate <Link to='/register'>aqu&iacute;</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
