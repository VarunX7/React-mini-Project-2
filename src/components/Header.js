import React from 'react'
import Logo from '../images/logo.png'

export default function Header(){
    return(
        <div className="head-container">
            <img src={Logo}/>
            <h4>my travel journal</h4>
        </div>
    )
}