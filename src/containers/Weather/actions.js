export const WEATHER_FORM_CHANGED = 'Weather/WEATHER_FORM_CHANGED'
export const setWeatherCity = (data) => ({ type: WEATHER_FORM_CHANGED, payload: data })
export const WEATHER_FORM_SUBMITTED = 'Weather/WEATHER_FORM_SUBMITTED'
export const submitWeatherForm = () => ({ type: WEATHER_FORM_SUBMITTED })
export const WEATHER_FORM_STARTED = 'Weather/WEATHER_FORM_STARTED'
export const startWeatherForm = () => ({ type: WEATHER_FORM_STARTED })
export const WEATHER_FORM_SUCCEED = 'Weather/WEATHER_FORM_SUCCEED'
export const successWeatherForm = () => ({ type: WEATHER_FORM_SUCCEED })
export const WEATHER_FORM_FAILED = 'Weather/WEATHER_FORM_FAILED'
export const failedWeatherForm = (error) => ({ type: WEATHER_FORM_FAILED, payload: error })
export const WEATHER_FORM_CLEARED = 'Weather/WEATHER_FORM_CLEARED'
export const clearWeatherForm = () => ({ type: WEATHER_FORM_CLEARED })

export const WEATHER_DATA = 'Weather/WEATHER_DATA'
export const setWeatherData = (data) => ({ type: WEATHER_DATA, payload: data })


export default WEATHER_FORM_CHANGED
