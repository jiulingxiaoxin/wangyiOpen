// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import { reducers as list} from 'pages/home/'
import { exce } from 'pages/excellentCourse'

console.log('store reducers')

export default combineReducers({
  home:list,
  exce
})