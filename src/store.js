import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { reducers as weatherReducers, sagas as weatherSagas } from './containers/Weather'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// // Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)

const rootReducer = combineReducers({
  route: routerReducer,
  weatherForm: weatherReducers.weatherForm,
  weatherData: weatherReducers.weatherData
})

const sagaMiddleware = createSagaMiddleware()

const myLogger = (store) => (next) => (action) => {
  next(action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      myLogger,
      routeMiddleware,
      sagaMiddleware
    )
  )
)

function* rootSaga() {
  yield [
    weatherSagas()
  ]
}

sagaMiddleware.run(rootSaga)


export { store, history }
