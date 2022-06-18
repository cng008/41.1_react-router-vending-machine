import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import NavBar from './NavBar'
import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Chips from './Chips'
import Gum from './Gum'

/* Main component. Renders vending machine
 * links to available items */

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/gum">
          <Gum />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
