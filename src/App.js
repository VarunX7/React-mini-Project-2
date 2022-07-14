import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Data from './Data'

export default function App(){

  const cards = Data.map(item =>{
    return <Card 
              key={item.id}
              {...item}
            />
  })
  return(
    <div className="main-container">
    
      <Header/>
      <div className="card-holder">
        {cards}
      </div>
    </div>
  )
}