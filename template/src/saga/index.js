import {take,all,fork,put,call} from 'redux-saga/effects';
import { ACTION_SAGA_INIT_COMMON } from '../actions/sagaActions';
import { ACTION_REDUCER_INIT_COMMON } from '../actions/reducerActions';
// import {push} from 'connected-react-router'
import {Entities} from '@Rvc/Core'

// 硬件代理使用 @Rvc/Core 中的 Entities
// 获取需要的硬件代理 proxyService = Entities.getInstance().getService(硬件代理名称)
// 使用代理调用接口 proxyService.接口名(参数)
// 所有硬件接口使用 promise 返回，方便链式调用
function getDevInfo(){
  const entity = Entities.getInstance()
  const deviceControlService = entity.getService('DeviceControlService');

  return deviceControlService.QueryHardwareInfo().then((data)=>{
    console.log('deviceControlService callback: ', data)
    return {
      terminalNo: data.terminalNo,
      machineType: data.machineType,
      termVersion: data.termVersion,
      termLimit: data.termLimit,
      ip: data.ip,
      mac: data.mac,
      site: data.site
    }
  }).catch(err=>{ 
    console.log('deviceControlService err : ', err)
    return null
  })
}


// 使用Call方法调用上面的异步函数，拿到返回值后使用put进行下一次传递进入reducer
function* watchToInitCommonData(){
  yield take(ACTION_SAGA_INIT_COMMON)
  // yield call(fetchCommonData)
  console.log('watchToInitCommonData : ', ACTION_SAGA_INIT_COMMON)
  
  const devinfo = yield call(getDevInfo)
  console.log('watchToInitCommonData : devinfo->', devinfo)
  
  yield put({type: ACTION_REDUCER_INIT_COMMON, payload: devinfo});
}


export default function* saga(){
  yield all([
    fork(watchToInitCommonData)
  ])
}