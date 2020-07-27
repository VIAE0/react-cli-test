import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {ACTION_SAGA_BACK_HOME, ACTION_SAGA_CALL_SERVICES, ACTION_SAGA_HANGUP_SERVICES,
  ACTION_SAGA_REGIST_EVENT, ACTION_SAGA_UNREGIST_EVENT} from '../actions/sagaActions'
import { ACTION_SAGA_INIT_COMMON } from '../../../../actions/sagaActions';
import imgLogo from 'Assets/imgs/logo_cmb.png'
// import {Link} from 'react-router-dom';

class Header extends React.PureComponent {

  constructor(props){
    super(props)
    this.state = {}
  }

  // 使用PropTypes对出入参数进行类型检查
  static propTypes = {
    callState: PropTypes.object.isRequired,
    dispatchActions: PropTypes.func.isRequired
  }

  // 入参使用
  static mapStateToProps = (state)=>{
    return {
      callState:state['Header'].callState
    }
  }

  static mapDispatchToProps = (dispatch) => {
    return {
      dispatchActions:(action, data={})=>{
        console.log('header going to dispatch action : ', action)
        dispatch({
          type: action,
          payload: data
        });
      }
    }
  }

  componentDidMount(){
    console.log('componentDidMount function : ', this.props)
    this.props.dispatchActions(ACTION_SAGA_REGIST_EVENT)
    this.props.dispatchActions(ACTION_SAGA_INIT_COMMON)
    // this.props.dispatchActions({
    //   type: ACTION_SAGA_INIT_COMMON
    // })
  }

  componentWillUnmount(){
    // 删除硬件监听事件
    this.props.dispatchActions(ACTION_SAGA_UNREGIST_EVENT)
  }

  static getDerivedStateFromProps(nextprops, prestate){
    console.log('Header getDerivedStateFromProps : ', nextprops)
    return null
  }

  onHangup(){
    //关闭连线
    this.props.dispatchActions(ACTION_SAGA_HANGUP_SERVICES)
  }
  onMakeCall(){
    //呼叫柜员
    console.log('on make call pressed')
    this.props.dispatchActions(ACTION_SAGA_CALL_SERVICES)
  }
  backToHome(){
    // this.nextProcess('/home','back to home')
    console.log('backToHome pressed')
    this.props.dispatchActions(ACTION_SAGA_BACK_HOME)
  }

  render() {
    return (
      <div className='header'>
        <div className='logo-img'><img src={imgLogo} /></div>
        <ul>
          <li className='fz_28' onClick={this.backToHome.bind(this)}> <span className='icon icon-home fz_32'></span>回到首页</li>
          <li className='fz_28' onClick={this.onMakeCall.bind(this)}> <span className='icon icon-customer fz_32'></span>
            {this.props.callState.content}
          </li>
        </ul>
      </div>
    )
  }

}

export default connect(Header.mapStateToProps, Header.mapDispatchToProps)(Header)

