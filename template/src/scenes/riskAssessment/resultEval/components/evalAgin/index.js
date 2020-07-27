import React from 'react'
import PropTypes from 'prop-types'

class EvalAgin extends React.Component{
    
  constructor(){
    super();
    this.state={
      list:[
        {
          id:1,
          option:'前一次评估未按本人实际情况选择选项'
        },
        {
          id:2,
          option:'前一次评估操作有误'
        },
        {
          id:3,
          option:'对本人现有风险承受能力级别存在质疑'
        },
        {  
          id:4,
          option:'其他原因<input type="text" class="fz_28" placeholder="请输入具体原因"/>'
        }
            
      ]
    }
  }

  

  render(){

    return(
      <div className="problems">
        <h1 className='fz_44'>请选择重新评估的原因</h1>
             
        <ul>
          {
            this.state.list.map((res)=>{
                         
              return <li className='fz_28' dangerouslySetInnerHTML={{__html:res.option}} key={res.id}></li>
            })

          }
        </ul>
        <button className="fz_32">确定</button>               
      </div>
    )
  }
}

export default EvalAgin;