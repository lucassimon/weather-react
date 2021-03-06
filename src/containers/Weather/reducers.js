import {
  WEATHER_FORM_CHANGED,
  WEATHER_FORM_STARTED,
  WEATHER_FORM_SUCCEED,
  WEATHER_FORM_FAILED,
  WEATHER_FORM_CLEARED,
  WEATHER_DATA
} from './actions'

const intialWeatherForm = {
  city: '',
  error: false,
  errors: '',
  loading: false
}


const weatherForm = (state = intialWeatherForm, action) => {

  switch (action.type) {

    case WEATHER_FORM_CHANGED: {
      return {
        ...state,
        city: action.payload
      }
    }

    case WEATHER_FORM_STARTED: {
      return {
        ...state,
        loading: true,
        error: false,
        errors: ''
      }
    }

    case WEATHER_FORM_FAILED: {
      return {
        ...state,
        loading: false,
        error: true,
        errors: action.payload
      }
    }

    case WEATHER_FORM_SUCCEED: {
      return {
        ...state,
        loading: false,
        error: false,
        errors: ''
      }
    }

    default:
      return state
  }
}


const intialWeatherData = {
  coord: {},
  weather: [],
  base: "",
  main: {},
  wind:{},
  clouds:{},
  rain:{},
  dt:0,
  sys:{},
  id:0,
  name:'',
  cod:0,
  error: false,
  errors: '',
  loading: false
}


const weatherData = (state = intialWeatherData, action) => {

  switch (action.type) {

    case WEATHER_DATA: {

      return {
        ...state,
        coord: action.payload.coord,
        weather: action.payload.weather.map((i) => ({
          id: i.id,
          main: i.main,
          description: i.description,
          icon: i.icon
        })),
        base: action.payload.base,
        main: action.payload.main,
        visibility: action.payload.visibility,
        wind: action.payload.wind,
        clouds: action.payload.clouds,
        rain: action.payload.rain,
        dt: action.payload.dt,
        sys: action.payload.sys,
        id: action.payload.id,
        name: action.payload.name,
        cod: action.payload.cod,
      }
    }

    default:
      return state
  }
}


export default { weatherForm, weatherData }