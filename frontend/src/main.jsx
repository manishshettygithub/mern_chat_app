import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Home from './pages/home/home.jsx'
import SignUp from './pages/signup/signup.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>


    </BrowserRouter>
    
  </React.StrictMode>
)
