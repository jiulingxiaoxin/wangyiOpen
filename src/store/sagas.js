import { takeEvery } from 'redux-saga/effects'
import { sagas as home } from 'pages/home/'
import { sagas as exce } from 'pages/excellentCourse/'
let  { GETLIST } = home.types
let { READYCHANGETYPE } = exce.types


console.log('store sagas')

function * sagas(){
  yield takeEvery(GETLIST,home.action) //监听home里的页面有没有触发dispatch，有的话就派发一个action到home的sagas里
  yield takeEvery(READYCHANGETYPE,exce.action)
}

export default sagas