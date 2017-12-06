import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  return (
    <div>
        <h1> Home </h1>
        <p> Informações da home </p>
        <p>
          <NavLink to="/clima-e-tempo"> Clima e tempo</NavLink>
        </p>
    </div>
  )
}
export default Home
