import React from 'react';
import imgSuccess from 'Assets/imgs/success.png'

class RepealSuccess extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='result-success' style={{textAlign:'center'}}>
        <div><img src={imgSuccess} /></div>
        <h1 className='fz_44' style={{marginTop:'35px'}}>风险评估撤销成功</h1>
      </div>
    )
  }
}
export default RepealSuccess;