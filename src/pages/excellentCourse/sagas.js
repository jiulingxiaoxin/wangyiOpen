import * as types from './action_types'
import {get} from 'utils/http'
import { put } from 'redux-saga/effects'


function * CHANGETYPE(action){
  let res = yield get({
    url:`/vip/open/trade/mob/course/items.do?cursor=0&pagesize=21&contentType=1`
  })
  yield put({type:types.CHANGETYPE,data:res.data.data})
}

export {
  types,
  CHANGETYPE as action
}