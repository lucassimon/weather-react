import axios from 'axios'
import { takeLatest, select, call, put } from 'redux-saga/effects'
import {
  WEATHER_FORM_SUBMITTED,
  submitWeatherForm,
  startWeatherForm,
  successWeatherForm,
  failedWeatherForm,
  setWeatherData
} from './actions'



function* weatherByCityFlow() {
  // TODO: check if not in process (maybe loading visible).
  const weatherForm = yield select((state) => state.weatherForm);
  // get the state data
  const payload = {}
  payload.city = weatherForm.city

  console.log(payload)
  const api_key = 'ebd9e2b26ca494600b10493872f2fe0d'
  let url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api_key}`

  yield url
  yield put(startWeatherForm())


  let response = {}
  try {
    response = yield call(axios.get, url)

  } catch (error) {
    const { data } = error.response
    yield put(failedWeatherForm(data.message || 'Contact the administrator.'))
    return yield false
  }

  yield put(successWeatherForm())

  const { data } = response

  yield put(setWeatherData(data))

  return false
}
export default function* weatherSagas() {
  yield [
    takeLatest(WEATHER_FORM_SUBMITTED, weatherByCityFlow)
  ];
}