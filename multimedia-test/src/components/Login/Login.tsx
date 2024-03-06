import React, { useState } from 'react';
import '../../styles/login.css';

interface Props {
    onLogin: (email: string) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !email.trim()) {
            setError('Por favor ingresa un correo electrónico');
            return;
        }

        if (!validateEmail(email)) {
            setError('Por favor ingresa un correo electrónico válido');
            return;
        }
        onLogin(email);

        console.log('Inicio de sesión exitoso con correo:', email);
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h2 className='login-title'>Paso 1</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="correo@example.com"
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button className='login-submit' type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
