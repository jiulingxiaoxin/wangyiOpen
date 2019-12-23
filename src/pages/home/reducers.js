import { LOADDATA } from './action_types'
import { Map , List} from 'immutable'
const defaultState = Map({
  list:List([])
})
export default (state=defaultState,action)=>{
  
  console.log('home reducers')
  switch(action.type){
    case LOADDATA:
      return state.set('list',action.data)
    default:
      return state
  }
}