import { ACTION_REDUCER_INIT_COMMON } from '../actions/reducerActions';

// errorCode: 0
// errorMsg: ""
// ip: (2) ["99.12.23.128", "169.254.95.149"]
// isEnd: 1
// mac: (2) ["c8:d9:d2:1d:0a:3c", "02:00:4c:4f:4f:50"]
// machineType: "RVC.PAD"
// messageType: 4
// reserved1: -842150451
// reserved2: -842150451
// reserved3: ""
// reserved4: ""
// sessionID: 41673485
// site: "cmb.flb"
// termLimit: "OFF"
// termVersion: "3.1.0.0"
// terminalNo: "7715010008"
// transID: 256

const initState={
  show: true,
  page: 1,
  terminalNo: ''
}

export default function(state=initState, action){
  console.log('common reducer : ', action)
  switch (action.type) {
    case ACTION_REDUCER_INIT_COMMON:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
  
}