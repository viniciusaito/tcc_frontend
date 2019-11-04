import React, { useState } from 'react';
import './Login.css'

import logo from '../assets/agronomy.svg'
import api from '../services/api.js'

export default function Login({ history }) {
    const [inputemail, setInputemail] = useState('');
    const [pwd, setPwd] = useState('');

    async function handleSubmit(e) {
        e.preventDefault(); //previne comportamento padrão de redirecionamento
        if(inputemail==='' || pwd===''){
            console.log('Can\'t authenticate')
        }
        else{
            const response = await api.get(`/user/${inputemail}/${pwd}`);

            // console.log(response)
            const { _id, email, password, isAdmin } = response.data;
            
            if(pwd === password){
                history.push(`/main/${_id}/${email}/${isAdmin}`)
            }
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Agronomy" />
                <input 
                    placeholder="Digite seu usuário" 
                    type="email"
                    value={inputemail}
                    onChange={e => setInputemail(e.target.value)}
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
