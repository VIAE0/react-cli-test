import React from 'react'
import 'Assets/css/prompt.scss'

class Risk extends React.Component{
  constructor(props){
    super(props);
    this.state = {
         
    }
  }

  render(){
    return(
      <div className='protocol'>
        <h1 className='fz_40'>招商银行老龄客户风险确认书</h1>
        <p className='fz_28 content'>
                需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容
需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容容需知内容需知内容需知内容需知内容
需知内容需知内容需知内容需知内容需知内容需
需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容
需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容
内容需知内容需知内容需知内容需知内容
需知内容需知内容需知内容需知内容需知内容需知内内容需知内容需知内容需知内容需知内容
需知内容需知内容需知内容需知内容需知内容需知内内容需知内容需知内容需知内容需知内容
需知内容需知内容需知内容需知内容需知内容需知内
        </p>

        <p className='fz_24 tips'>
                本人已阅读、理解并同意《招商银行老龄客户风险确认书》，本人所进行的购买、撤销、赎回等交易，无论通过任何渠道办理，均是基于对产品的特点、期限、流动性及相关风险的充分理解和评估所做出的独立判断。
        </p>
        <button className='fz_32 btn-agree'>同意协议并确认</button>
                
      </div>
    )
       
  }
}

export default Risk;