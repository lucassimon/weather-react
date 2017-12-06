import React from 'react'
import { connect } from 'react-redux'


import {
  setWeatherCity,
  submitWeatherForm
} from './actions'

const WeatherForm = (props) => {

  return (
    <form onSubmit={props.onFormSubmit}>
      { props.weatherForm.error &&
        <div>
            {props.weatherForm.errors}
        </div>
      }

      <input
        className="input"
        type="text"
        name="city"
        value={props.weatherForm.city}
        placeholder="Nome da cidade"
        required
        onChange={props.onHandleChange}
      />

      <button> Login </button>
      { props.weatherForm.loading &&
        <p> Carregando...</p>
      }
    </form>
  )
}


const mapStateToProps = (state) => ({
  weatherForm: state.weatherForm
})


const mapDispatchToProps = (dispatch) => ({
  onHandleChange(e) { dispatch(setWeatherCity(e.target.value)) },
  onFormSubmit(e) {
    e.preventDefault()
    dispatch(submitWeatherForm())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);

