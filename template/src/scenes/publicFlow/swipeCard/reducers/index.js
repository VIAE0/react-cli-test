import { SWIPE_CARD_REDUCER } from '../actions/reducerActionType';

const initState={
  show: true,
  page: 1,
  terminalNo: ''
}

export default function(state=initState, action){
  console.log('home swipeCard reducer : ', action)
  switch (action.type) {
    case SWIPE_CARD_REDUCER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
  
}  