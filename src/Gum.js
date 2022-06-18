import React from 'react'
import { Link } from 'react-router-dom'
import './Gum.css'

const Gum = () => (
  <div className="Gum">
    {/* <img
      src="https://media3.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy.gif"
      alt="one punch man gum"
    /> */}
    <div className="Gum-Message">
      <h3>There's no more gum :0</h3>
      <Link to="/">Go Back</Link>
    </div>
  </div>
)

export default Gum
