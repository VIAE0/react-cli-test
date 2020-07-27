// import {delay} from 'redux-saga/effects';
import {take,all,fork,put,call} from 'redux-saga/effects';
// import { push } from 'connected-react-router'
import {FETCH_TERMINAL_INFO,SWIPE_CARD_SAGA} from '../actions/sagaActionType';
import {SWIPE_CARD_REDUCER} from '../actions/reducerActionType';
import {push} from 'connected-react-router'
// import {getRsaPublicKey} from './api/rsaInit'
import {Entities, EventEmitter, RvcEntityEvents} from '@Rvc/Core'
// function* watchGetRsaKey(){
//   while(true){
//     // const action= yield take(FETCH_RSAKEY);
//     console.log('watchGetRsaKey action : ', action)
//     // yield put({type:'@@change_username',value:{username: action.value.username}});
//     // yield call(getRsaPublicKey)
//   }
// }

//刷卡
function getCardInfo(){
  const entity = Entities.getInstance()
  const cardReaderAdapter = entity.getService('CardReadAdapterService');
  console.log(cardReaderAdapter)
  let req = {};
  req.module = 0;
  req.aid = 'A000000333';
  req.lightPos = 0;
  req.businessData = '';
  req.reserved1 = [];
  req.reserved2 = [];
  req.timeout=60000;

  return cardReaderAdapter.Read(req).then((data)=>{
    console.log('cardReaderAdapter.Read => ', data)
    return data
  }).catch((err)=>{
    console.log('cardReaderAdapter.Read error => ', err)
    return null
  })
}


function* watchGetTerminalInfo(){
  while(true){
    const action= yield take(FETCH_TERMINAL_INFO);
    console.log('watchGetTerminalInfo action : ', action)
    yield put({type:'@@change_terminal_info',value:{}});
  }
}

function* watchSwipeCard(){ 
  while(true){
    yield take(SWIPE_CARD_SAGA);
    const cardinfo = yield call(getCardInfo)
    yield put({type:SWIPE_CARD_REDUCER,payload:{ICCardNo:cardinfo.ICCardNo}});
    yield put(push('/enterPsd'))
  
  }
}



export default function* saga(){
  yield all([
    fork(watchGetTerminalInfo),
    // fork(watchGetRsaKey)
    fork(watchSwipeCard)
  ])
}