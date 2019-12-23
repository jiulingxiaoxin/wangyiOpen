import { READYCHANGETYPE } from './action_types'
import { Map, List } from 'immutable'

const defaultState = Map(
  {
    list:List([])
  }
)

export default (state = defaultState,action)=>{
  switch(action.type){
    case READYCHANGETYPE:
      /* return {
        list:action.data
      }
       */
      return state.set('list',action.data)
    default :
      return state
  }
}