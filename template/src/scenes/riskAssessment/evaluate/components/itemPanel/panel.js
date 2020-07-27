import React from 'react'
import LinkBtn from '../../../../components/linkBtn';

class Panel extends React.Component{
  render(){
    return(
      <div className='item-panel'>
        <div className='panel-content'>
          <h1 className='fz_28'>风险评估 <small className='fz_20'>上次评估已过期</small></h1>
          <p className='fz_24'>完成评估可享受更多投资理财服务</p>
        </div>
        <LinkBtn width='165px' height='60px' text='去评估'/>
      </div>
    )
  }
}
export default Panel;