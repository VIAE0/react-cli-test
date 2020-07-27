import React from 'react'
import PropTypes from 'prop-types'

class EvalList extends React.Component{
    
  constructor(){
    super();
    this.state={
      list:[
        {
          id:1,
          option:'**成'
        },
        {
          id:2,
          option:'**明'
        },
        {
          id:3,
          option:'2019-02-12'
        },
        {  
          id:4,
          option:'2019-02-12'
        },
        {
          id:2,
          option:'A5'
        },
        {
          id:3,
          option:'激进型'
        },
        {  
          id:4,
          option:'激进型(R5)及以下产品'
        }
            
      ]
    }
  }

  

  render(){

    return(
      <div className="result-list">
            
        <div className='fz_28 item' >
          <label>评估人</label>
          <span>{this.state.list[0].option}</span>
        </div>
        <div className='fz_28 item' >
          <label>监护人</label>
          <span>{this.state.list[1].option}</span>
        </div>
        <div className='fz_28 item' >
          <label>评估时间</label>
          <span>{this.state.list[2].option}</span>
        </div>
        <div className='fz_28 item' >
          <label>有效期至</label>
          <span>{this.state.list[3].option}</span>
        </div>
        <div className='fz_28 item' >
          <label>风险承受能力级别</label>
          <span>{this.state.list[4].option}</span>
        </div>
        <div className='fz_28 item' >
          <label>风险类型</label>
          <span>{this.state.list[5].option}</span>
        </div>
        <div className='fz_28 item' >
          <label>适合的产品类型</label>
          <span>{this.state.list[6].option}</span>
        </div>
                           
      </div>
    )
  }
}

export default EvalList;