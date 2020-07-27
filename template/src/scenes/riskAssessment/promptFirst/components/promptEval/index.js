import React from 'react'
import GoBack from '../../../../components/goback'
class PromptEval extends React.Component{
  constructor(props){
    super(props);
    this.state={
      type:1,
      list:[
        {
          titile:'首次评估需现场银行人员协助办理',
          connect:'请联系现场银行人员'
        },
        {
          titile:'未成年人首次评估需现场银行人员协助办理',
          connect:'请联系现场银行人员'
        },
        {
          titile:'老龄客户风险确认需现场银行人员协助办理',
          connect:'请联系<span class="color-orage">银行见证人员</span>'
        }
      ]
    }
  }
  render(){
    
    let type = this.state.type;
    if(type){
      return (
        <div className='prompt'  style={{'textAlign':'center','marginTop':'220px'}}>
          <h1 className='fz_44' style={{'marginBottom':'40px'}}>{this.state.list[type].titile}</h1>
          <p className='fz_32' dangerouslySetInnerHTML={{__html:this.state.list[type].connect}}></p>

          <GoBack/>
        </div>
      )
    }
  }
}
export default PromptEval;