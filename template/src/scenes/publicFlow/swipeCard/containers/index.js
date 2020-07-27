import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Launcher from '../components/launcher';

import { FETCH_TERMINAL_INFO } from '../actions/sagaActionType'

class Root extends React.PureComponent {

  static propTypes = {
    toGetTerminalInfo: PropTypes.func,
    dispatchAction: PropTypes.func.isRequired
  }
  constructor(props){
    super(props)
    this.state={
      count:59
    }
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
      },
      dispatchAction:(action)=>{
        console.log('going to dispatch readCard')
        dispatch({type:action})
      }
    }
  }

  // 倒计时
  CountDown=(count)=>{
    let timer = setInterval(()=>{
      count--;
      if(count<10){
        let countStr = count.toString();
        count = countStr.padStart(2,0);
      }
      this.setState({
        count:count
      })

      if( count==0 ||count == '00'){
        clearInterval(timer)
      }
      
    },1000)

  }

  componentDidMount(){
    window.console.log('Home root container conponentDidMount')
    this.props.toGetTerminalInfo()
    this.CountDown(60)
  }

  componentWillUnmount(){
    this.setState = (state, callback)=>{
      return;
    }
  }
  

  render() {
    return (
      <div className='home'>
        <div className='title'> 
          <h1 className='fz_44'>请扫码或刷卡进行验证身份 </h1>
          <small className='fz_40'>{this.state.count}</small>
          <i className='fz_32'>秒</i>
        </div>
        <Launcher dispatchAction={this.props.dispatchAction} /> 
      
      </div>
    
      
    )
  }
}

export default connect(null, Root.mapStateToDispatch)(Root);