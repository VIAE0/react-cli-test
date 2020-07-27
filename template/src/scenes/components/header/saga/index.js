import {take,all,fork,put,call} from 'redux-saga/effects';
import { ACTION_SAGA_BACK_HOME, ACTION_SAGA_CALL_SERVICES, ACTION_SAGA_HANGUP_SERVICES,
  ACTION_SAGA_REGIST_EVENT, ACTION_SAGA_UNREGIST_EVENT } from '../actions/sagaActions';
import { ACTION_REDUCER_BACK_HOME } from '../actions/reducerActions';
import {push} from 'connected-react-router'
import {Entities, EventEmitter, RvcEntityEvents} from '@Rvc/Core'

// 这是一个硬件调用的例子
// Entities是所有硬件的代理类集合
// 通过getService方法获取对应的代理实例，调用接口
function callService(isMakeCall){
  console.log('Call Service : ', isMakeCall)
  const entity = Entities.getInstance().getService('CounterConnectorService')
  
  isMakeCall && entity && entity.MakeCall(0, '')
  !isMakeCall && entity && entity.HangupCall()
}

// 注册硬件事件的方法
// EventEmitter是硬件事件通知中心
// 在通知中心中，通过RvcEntityEvents的硬件事件集合找到对应的事件，通过EventEmitter的subscribe方法进行订阅
// 
function registCounterConnectorEvent(){
  EventEmitter.subscribe(RvcEntityEvents.CounterConnectorEvents.OnCallStateChanged, Symbol.for('Header'), (data)=>{
    console.log('CounterConnectorEvent : ', data)
  })
}

function unregistCounterConnectorEvent(){
  EventEmitter.unsubscribe(RvcEntityEvents.CounterConnectorEvents.OnCallStateChanged, Symbol.for('Header'))
}

function* watchCallService(){
  while(true){
    yield take(ACTION_SAGA_CALL_SERVICES)
    yield call(callService, true)
  }
}

function* watchHangupService(){
  while(true){
    yield take(ACTION_SAGA_HANGUP_SERVICES)
    yield call(callService, false)
  }
}

function* watchBackToHome(){
  while(true){
    const action= yield take(ACTION_SAGA_BACK_HOME);
    console.log('watchBackToHome action : ', action)
    yield put({type:ACTION_REDUCER_BACK_HOME,value:{page:1, show:true}});
    yield put(push('/home'))
  }
}

function* watchRegistEvent(){
  while(true){
    yield take(ACTION_SAGA_REGIST_EVENT)
    yield call(registCounterConnectorEvent)
  }
}

function* watchRemoveEvent(){
  while(true){
    yield take(ACTION_SAGA_UNREGIST_EVENT)
    yield call(unregistCounterConnectorEvent)
  }
}

// 启动独立的监视事件的任务，可以简单的理解为每一个fork是一个线程
// 每一个线程监听独立的事件(组)，
// 例如登录和登出两个事件可以视为一个事件组，那可以写入一个线程中进行监听
export default function* saga(){
  yield all([
    fork(watchBackToHome), 
    fork(watchCallService),
    fork(watchHangupService),
    fork(watchRegistEvent),
    fork(watchRemoveEvent)
    // fork(watchGetRsaKey)
  ])
}