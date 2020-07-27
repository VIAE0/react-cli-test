import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import  Prolems from '../components/index';


import { FETCH_TERMINAL_INFO } from '../actions/sagaActionType'
import GoBack from '../../../components/goback';



class Root extends React.PureComponent {

  static propTypes = {
    toGetTerminalInfo: PropTypes.func
  }

  // static mapStateToProps=(state)=>{
  //   return {
  //     isLogin:state['Home'].isLogin,
  //     username:state['Home'].username,
  //     age: state['Home'].age
  //   }
  // }

  static mapStateToDispatch=(dispatch)=>{
    return {
      toGetTerminalInfo:()=>{
        console.log('going to dispatch GetTerminalInfo')
        dispatch({type:FETCH_TERMINAL_INFO});
      }
    }
  }

  //需判断未成年显示 warn组件

  render() {
    return (
      <div>
        <Prolems/>
        <GoBack/>
      </div>
     
    )
  }
}

export default connect(null, Root.mapStateToDispatch)(Root);