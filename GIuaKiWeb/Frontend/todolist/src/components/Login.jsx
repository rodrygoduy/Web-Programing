import React, { useState } from 'react';
import axios from 'axios';
import '../Style/Login.css'

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); 
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegistering) {
                const response = await axios.post('/api/user/dangki', {
                    username,password
                });
                setSuccessMessage(" Đăng kí thành công, bạn có thể đăng nhập.");
                setIsRegistering(false); 
            } else {
                const response = await axios.post('/api/user/dangnhap', {
                    username,
                    password,
                });
                localStorage.setItem('token', response.data.token);
                onLoginSuccess(); 
            }
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    const toggleMode = () => {
        setIsRegistering(!isRegistering);
        setError('');
        setSuccessMessage('');
    };

    return (
        <div className="login-container">
            <h2>{isRegistering ? "Register" : "Login"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isRegistering ? "Register" : "Login"}</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
            <p>
                {isRegistering ? "Already have an account?" : "Don't have an account?"}
                <button onClick={toggleMode} style={{ marginLeft: '5px', cursor: 'pointer', color: 'blue', background: 'none', border: 'none' }}>
                    {isRegistering ? "Login here" : "Register here"}
                </button>
            </p>
        </div>
    );
};

export default Login;