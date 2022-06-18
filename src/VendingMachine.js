import React from 'react'
import { Link } from 'react-router-dom'
import './VendingMachine.css'

/** shows main page with a list of snacks that you can get from the vending machine */

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-Items">
        <Link to="/soda">Soda</Link>
        <Link to="/chips">Chips</Link>
        <Link to="/gum">Gum</Link>
      </div>
    </div>
  )
}

export default VendingMachine
