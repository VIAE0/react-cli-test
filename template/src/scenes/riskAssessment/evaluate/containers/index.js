import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ItemPanel from '../components/ItemPanel/index';

import 'Assets/css/evaluate.scss'

import { FETCH_TERMINAL_INFO } from '../actions/sagaActionType'

class Root extends React.PureComponent {

  static propTypes = {
    toGetTerminalInfo: PropTypes.func
  }


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
      <div className='evaluate'>
        <ItemPanel/>
      </div>
    )
  }
}

export default connect(null, Root.mapStateToDispatch)(Root);