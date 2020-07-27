import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import PromptEval from '../components/promptEval';
import Operator from '../components/operator/index';
import Toast from '../../../components/toast'


import { FETCH_TERMINAL_INFO } from '../actions/sagaActionType'


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

  componentDidMount(){
    window.console.log('Home root container conponentDidMount')
    this.props.toGetTerminalInfo()
  }


  render() {
    return (
      <div>
        <PromptEval />   
        {/* <Operator /> */}
        <Toast title="该岗位无资质"/>
      </div>
     
    )
  }
}

export default connect(null, Root.mapStateToDispatch)(Root);