import { LOADDATA } from './action_types'

const defaultState = {
  list:[]
}
export default (state=defaultState,action)=>{
  
  console.log('home reducers')
  switch(action.type){
    case LOADDATA:
      return{
        list:action.data
      }
    default:
      return state
  }
}