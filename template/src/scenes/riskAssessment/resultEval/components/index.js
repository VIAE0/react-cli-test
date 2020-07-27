import React from 'react'
import Warn from '../../../components/warn'
import EvalAgin from './evalAgin'
import EvalResult from './evalResult'
import EvalFinish from './evalFinish'

import GoBack from '../../../components/goback';


class Result extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='result'>
        {/* <Warn title='评估结果已过期，每次评估有效期为3年'/> */}
        {/* <EvalAgin/> */}
        <EvalFinish/>                
        {/* <GoBack/> */}
      </div>
    )
  }
}
export default Result;