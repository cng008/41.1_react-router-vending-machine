import React from 'react'
import { Link } from 'react-router-dom'

/** shows main page with a list of snacks that you can get from the vending machine */

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <p>whaddya want</p>
      <Link to="/soda">Soda</Link>
      <Link to="/chips">Chips</Link>
      <Link to="gum/">Gum</Link>
    </div>
  )
}

export default VendingMachine
