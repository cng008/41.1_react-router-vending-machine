import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Chips.css'

const Chips = () => {
  const [bags, setBags] = useState([])

  function handleClick() {
    const x = window.innerWidth * Math.random()
    const y = window.innerHeight * Math.random()
    setBags(prevBags => [...prevBags, { x, y }])
  }

  const b = bags.map((bag, i) => (
    <img
      key={i}
      src="https://www.pngall.com/wp-content/uploads/4/Potato-Chips-PNG-Free-Image.png"
      className="bag"
      style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      alt="bag of lay's chips"
    />
  ))

  return (
    <div className="Chips">
      <div className="Chips-Message">
        <h1>bags eaten: {bags.length}</h1>
        <button onClick={handleClick}>nom nom nom</button>
        <Link to="/">Go Back</Link>
      </div>
      <div className="Chips-Container">{b}</div>
    </div>
  )
}

export default Chips
