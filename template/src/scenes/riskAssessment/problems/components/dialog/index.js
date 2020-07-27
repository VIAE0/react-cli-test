import React from 'react'
import BackCvoer from '../../../../components/backCover';
import 'Assets/css/prompt.scss'

class Risk extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      boxOffset:''
    }
  }
  componentDidMount(){
    let boxOffset = - document.getElementById('operBox').offsetHeight/2+'px';
   
    this.setState({
      boxOffset:boxOffset
    })
  }
  render(){

    let h = document.documentElement.clientHeight+'px'; 
    return(
      <div className='dialog'>
        <div className='back_cover' style={{height:h}}></div>
        <div className='oper-box' id="operBox" style={{'transform': `translateY(${this.state.boxOffset})`}}>
          <h1 className='fz_40'>风险评估需知</h1>
          <p className='fz_28 content'>
                    需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容
    需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容
    需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容
    需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容需知内容
          </p>
          <div className='btns'>
            <button className='fz_32 btn-back'>返回</button>
            <button className='fz_32 btn-true'>继续评估</button>
          </div>
                    
        </div>
                
      </div>
    )
       
  }
}

export default Risk;