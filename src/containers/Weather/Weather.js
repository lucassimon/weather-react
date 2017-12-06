import React from 'react'
import { NavLink } from 'react-router-dom'

import WeatherForms from './WeatherForm'
import WeatherInfo from './WeatherInfo'


const Weather = (props) => {

  return (
    <div>
      <h1> Clima e Tempo </h1>
      <p>
        <NavLink to="/"> Home </NavLink>
      </p>
      <WeatherForms />
      <WeatherInfo />
    </div>
  )
}

export default Weather
