import { createStore ,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import mysagas from './sagas'

import immutable from 'immutable'
const rootState = immutable.Map({})

console.log('store index')

const saga =  createSagaMiddleware()

const store = createStore(
  reducers,
  rootState,
  applyMiddleware(saga)
)

saga.run(mysagas)

export default store