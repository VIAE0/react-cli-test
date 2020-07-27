import React from 'react';
import imgPhone from 'Assets/imgs/pic_phone.png'

class RepealSuccess extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='result-success' style={{textAlign:'center'}}>
        <div><img src={imgPhone} /></div>
        <h1 className='fz_56' style={{marginTop:'35px'}}>请拿起听筒和远程员进行通话</h1>
        <h3 className='fz_40' style={{marginTop:'35px'}}>远程柜员332675已接通</h3>
      </div>
    )
  }
}
export default RepealSuccess;