import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import EnterPad from '../components/password';

import { FETCH_TERMINAL_INFO } from '../actions/sagaActionType'

class Root extends React.PureComponent {

  static propTypes = {
    ICCardNo: PropTypes.string.isRequired,
    toGetTerminalInfo: PropTypes.func
  }

  static mapStateToProps=(state)=>{
    return {
      ICCardNo:state['Home'].ICCardNo
    }
  }

  static mapStateToDispatch=(dispatch)=>{
    return {
      toGetTerminalInfo:()=>{
        console.log('going to dispatch GetTerminalInfo')
        dispatch({type:FETCH_TERMINAL_INFO});
      }
    }
  }
  constructor(props){
    super(props);
    this.state={
      ICCardReg:''
    }
  }

  componentDidMount(){
    let reg = /^(\d{4})\d+(\d{4})$/; 
    let ICCardReg = this.props.ICCardNo.replace(reg,'$1 **** **** $2');
    this.setState({
      ICCardReg:ICCardReg
    })
    window.console.log('PSD root container conponentDidMount : ', ICCardReg)
    this.props.toGetTerminalInfo()
  }


  render() {
    return (
      <EnterPad ICCardReg={this.state.ICCardReg}/>
    )
  }
}

export default connect(Root.mapStateToProps, Root.mapStateToDispatch)(Root);