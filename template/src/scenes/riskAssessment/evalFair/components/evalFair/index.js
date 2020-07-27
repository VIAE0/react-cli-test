import React from 'react'
import PropTypes from 'prop-types';
import imgFair from 'Assets/imgs/fair.png'

class EvalFair extends React.Component{

  render(){

    return(
      <div className="fair" style={{textAlign:'center'}}>    
        <div><img src={imgFair}/></div>
        <h1 className='fz_44'>评估失败</h1>
        <p  className='fz_32' >失败原因描述</p>
        <div className='btns'>
          <button className="fz_32 back-eval">返回风险评估首页</button>      
          <button className="fz_32 back-agin">再试一次</button>     
        </div>
              
      </div>
    )
  }
}

export default EvalFair;