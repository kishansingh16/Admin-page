import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'



export default function App() {
    return (
        < BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/>} />
                    <Route path="/login" element={ <LoginPage />} />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={< HomePage/> } />
                </Routes>
            </div>
        </ BrowserRouter>
    )
}

