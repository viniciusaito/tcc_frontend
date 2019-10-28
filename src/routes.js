import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Main from './pages/Main.jsx'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
        </BrowserRouter>
    );
}
