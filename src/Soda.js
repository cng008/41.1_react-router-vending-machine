import React from 'react'
import { Link } from 'react-router-dom'
import './Soda.css'

const Soda = () => (
  <div className="Soda">
    <img
      src="https://i.pinimg.com/originals/92/5b/f1/925bf115d71e0973da45b56f5178b46a.png"
      alt="strawberry ramune soda"
    />
    <div className="Soda-Message">
      <h3>Soda</h3>
      <Link to="/">Go Back</Link>
    </div>
    <img
      src="https://i.pinimg.com/originals/a2/83/cb/a283cb3175358f664f3bb0012afd17c6.png"
      alt="strawberry ramune soda"
    />
  </div>
)

export default Soda
