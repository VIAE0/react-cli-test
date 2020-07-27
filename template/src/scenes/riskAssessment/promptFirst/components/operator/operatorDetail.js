import React from 'react'
class OperatorDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <ul className='operator-info fz_28'>
        <ul>
          <li>经办人</li>
          <li><input className='fz_28' placeholder="6位数代码"/></li>
        </ul>
        <ul>
          <li>比列(%)</li>
          <li><input className='fz_28' placeholder="请输入"/></li>
        </ul>
        <span className='icon-del'></span>
            
      </ul>
    )
    
  }
}
export default OperatorDetail;