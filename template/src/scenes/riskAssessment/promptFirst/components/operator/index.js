import React from 'react'
import OperatorDetail from './operatorDetail'
import Toast from './toast'

class Operator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      boxOffset:''
    }
  }
  componentDidMount(){
    let boxOffset = - document.getElementById('operBox').offsetHeight/2+'px';
   
    this.setState({
      boxOffset:boxOffset
    })
  }
  render(){

      
    let h = document.documentElement.clientHeight+'px'; 
    return (
      <div>
        <div className='back_cover' style={{height:h}}></div>
        <div className='oper-box' id="operBox" style={{'transform': `translateY(${this.state.boxOffset})`}}>
          <h1 className='fz_40'>请填写经办人信息</h1>
          {/* <div className='input-group'>
                    <label className='fz_28' > 经办人 </label>
                    <input className='fz_28' defaultValue="123456"/>
                </div> */}
          <OperatorDetail/>
          <OperatorDetail/>
          <a className='fz_32 add-oper'>添加经办人</a>

          <Toast />

          <button className='fz_32 btn-true'>确定</button>
        </div>
            
      </div>
    )
      
  }
}
export default Operator;