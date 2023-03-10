import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import Image from '../../assets/images/bg.jpg'


const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default function LandingPage() {
    return (
        
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Welcome to MarketCap</h1>
            <p className="main-para text-center">join us now</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
       
    )
}

