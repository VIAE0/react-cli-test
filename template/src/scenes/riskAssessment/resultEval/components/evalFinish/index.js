import React from 'react'
import PropTypes from 'prop-types';
import EvalList from '../../../../components/resultList'
import CardBusi from '../../../../components/cardBusi'


class EvalResult extends React.Component{
    
  constructor(){
    super();
    this.state={
           
    }
  }

  

  render(){

    return(
      <div className="finish">    
        <h1 className='fz_44'>风险评估已完成</h1>
        <EvalList />
        <button className="fz_32 back-eval">返回风险评估首页</button>          
        <CardBusi/>   
      </div>
    )
  }
}

export default EvalResult;