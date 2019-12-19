import { READYCHANGETYPE } from './action_types'

const defaultState = {
  list:[]
}

export default (state = defaultState,action)=>{
  switch(action.type){
    case 'READYCHANGETYPE':
      return {
        list:action.data
      }
    default :
      return state
  }
}