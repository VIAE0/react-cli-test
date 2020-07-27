// import {delay} from 'redux-saga/effects';
import {take,all,fork,put} from 'redux-saga/effects';
// import { push } from 'connected-react-router'
import {FETCH_TERMINAL_INFO} from '../actions/sagaActionType'
// import {getRsaPublicKey} from './api/rsaInit'

// function* watchGetRsaKey(){
//   while(true){
//     // const action= yield take(FETCH_RSAKEY);
//     console.log('watchGetRsaKey action : ', action)
//     // yield put({type:'@@change_username',value:{username: action.value.username}});
//     // yield call(getRsaPublicKey)
//   }
// }

function* watchGetTerminalInfo(){
  while(true){
    const action= yield take(FETCH_TERMINAL_INFO);
    console.log('watchGetTerminalInfo action : ', action)
    yield put({type:'@@change_terminal_info',value:{}});
  }
}

export default function* rootSaga(){
  yield all([
    fork(watchGetTerminalInfo)
    // fork(watchGetRsaKey)
  ])
}