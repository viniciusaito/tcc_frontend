import React, { useState } from 'react';
import './Login.css'

import logo from '../assets/agronomy.svg'
import api from '../services/api.js'

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        if(email==='' || pwd===''){
            console.log('Can\'t authenticate')
        }
        else{
            const response = await api.get(`/user/${email}/${pwd}`);

            console.log(response)

            history.push('/main')
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Agronomy" />
                <input 
                    placeholder="Digite seu usuário" 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Digite sua senha" 
                    type="password"
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
