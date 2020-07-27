import React from 'react'
import CardBusi from '../../../components/cardBusi'
import EvalFair from './evalFair'

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
        <EvalFair/>                
        <CardBusi/>
      </div>
    )
  }
}
export default Result;