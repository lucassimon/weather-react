import React from 'react'
import { connect } from 'react-redux'


import {

} from './actions'

const WeatherInfo = (props) => {

  return (
    <div>
      <h2 data-cod={ props.weather.cod } data-id={ props.weather.id }> Cidade: { props.weather.name }</h2>
      <h3> Coordernadas </h3>
      <p>
        Longitude: { props.weather.coord.lon }  <br />
        Latitude: { props.weather.coord.lat }  <br />
      </p>
      <h3>
        Clima
      </h3>
      { props.weather.weather.map((i) => ({
        <p key={i.id}> AUHSd </p>
      }))}
      <h3>
        Base
      </h3>
      <h3>
        Principal
      </h3>
      <p>
        Temperatura atual: { props.weather.main.temp } <br />
        Temperatura minima: { props.weather.main.temp_min } <br />
        Temperatura máxima: { props.weather.main.temp_max } <br />
        Pressão: { props.weather.main.pressure } <br />
        Huminidade: { props.weather.main.humidity } <br />

      </p>
      <h3>
        Visibilidade
      </h3>
      <p>
        {props.weather.visibility}
      </p>
      <h3>
        Ventos
      </h3>
      <p>
        Velocidade: { props.weather.wind.speed }  <br />
        Deg: { props.weather.wind.deg }  <br />
      </p>
      <h3>
        Núvens
      </h3>
    </div>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weatherData
})


const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);

