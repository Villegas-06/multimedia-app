import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/register.css';
import Swal from 'sweetalert2';

interface Props {
  onRegister: (email: string, password: string) => void;
}

const Register: React.FC<Props> = ({ onRegister }) => {
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

    if (password.trim().length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await onRegister(email, password);

      await Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso!',
        text: 'Tu cuenta ha sido creada exitosamente',
        confirmButtonText: 'Ok'
      });

      navigate('/home');
    } catch (error) {
      setError('Error al registrar. Por favor verifica tus datos.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h2 className="register-title">Regístrate</h2>
        <form onSubmit={handleSubmit} className="register-form">
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
          <button className="register-submit" type="submit">Registrarse</button>
          <p className='login-account'>Ya tienes una cuenta? <Link to='/login'>Inicia Sesión</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
