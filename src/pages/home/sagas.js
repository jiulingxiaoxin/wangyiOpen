import { put } from 'redux-saga/effects'
import * as types from './action_types'
import {get} from 'utils/http'


console.log('home sagas')
function * loadData(action){
  try{
    let res = yield get({
      url:'/open/mob/subscribe/home/list.do?rtypes=2'
    })
    yield put({type:types.LOADDATA,data:res.data.data}) //此处是真实的action

  }catch(e){

  }
}

export {
  types,
  loadData as action
}
