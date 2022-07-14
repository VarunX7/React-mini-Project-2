import React from 'react'
import LocatorImg from '../images/locator icon.png'
export default function Card(props){
    return(
        <div className="card-container">
            <img className='main-img'  src={props.img} />
            <div className="text-container">
                <div className="firstline">
                    <img src={LocatorImg} />
                    <span>{props.country}</span>
                    <a href="">view on google map</a>
                </div>

                <h1 className="title">{props.title}</h1>
                <h6 className="date">{props.dates}</h6>
                <p className="text">{props.description}</p>

            </div>
        </div>
    )
}