import { ACTION_REDUCER_BACK_HOME } from '../actions/reducerActions';

// 初始化本模块的store模型
const initState={
  callState : {isInCall: false, content:'求助远程客服'},
  show: true,
  page: 1
}

// reducer只负责将数据写入store
export default function(state=initState, action){
  switch (action.type) {
    case ACTION_REDUCER_BACK_HOME:
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
  
}