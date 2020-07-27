import React from 'react'
import PropTypes from 'prop-types';
import EvalList from '../../../../components/resultList'


class EvalResult extends React.Component{
    
  constructor(){
    super();
    this.state={
           
    }
  }

  render(){

    return(
      <div className="problems">
                   
        <h1 className='fz_44'>这是你的风险评估结果</h1>
        <EvalList />
               
        <button className="fz_32 btn-agin">重新评估</button>               
      </div>
    )
  }
}

export default EvalResult;