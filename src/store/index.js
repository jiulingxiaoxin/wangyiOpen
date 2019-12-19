import { createStore ,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import mysagas from './sagas'

console.log('store index')

const saga =  createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(saga)
)

saga.run(mysagas)

export default store