import React from 'react'
import PropTypes from 'prop-types'
class ProlemItem extends React.Component{

  constructor(){
    super();
    this.state={
      total:16,
      operators:'编辑经办人信息',
      id:1,
      title:'你的家庭可支配年收入是多少？',
      list:[
        {
          id:1,
          option:'50万元以下'
        },
        {
          id:2,
          option:'50-100万元'
        },
        {
          id:3,
          option:'100-500万元'
        },
        {  
          id:4,
          option:'500万元以上'
        }
            
      ]
    }
  }

   editOper=(e)=>{
     let oper = e.target.value;
     this.setState({
       operators:oper
     })
     oper='';
   }

   render(){
     // const tips
     // if( this.state.id === this.state.total ){
     //     tips = {
     //         display:'none'
     //     }
     // }
     return(
       <div className="problems">
         <p className='fz_36'>
           <span>{this.state.id}</span>
           <span style={{color:'#808080',marginRight:'20px'}}>/{this.state.total}</span>
           {this.state.title}
         </p>
         <ul>
           {
             this.state.list.map((res)=>{
                         
               return <li className='fz_28' key={res.id}>{res.option}</li>
             })
           }
         </ul>
          
         <p className='fz_24 tips' >
                本人保证上述所填信息为本人真实的意思表示，完全独立依靠自身情况和判断做出上述答案，并接受贵行评估意见，了解自己的风险承受类型和适合购买的产品类型。同时确认如本人发生可能影响自身风险品谷承受能力的情形，再次购买私募产品时必须主动要求银行重新对本人进行风险承受能力评估，否则由此导致的一切后果由本人承担。
         </p>
         <div>
           <input className='fz_32 edit-oper' onChange={this.editOper} value={this.state.operators} placeholder=""/>
         </div>
       </div>
     )
   }
}

export default ProlemItem;