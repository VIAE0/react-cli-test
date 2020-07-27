import React from 'react';
import imgTeller from 'Assets/imgs/pic_teller02.png'

class RepealSuccess extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='result-success' style={{textAlign:'center'}}>
        <div><img src={imgTeller} /></div>
        <h1 className='fz_56' style={{marginTop:'35px'}}>此业务需远程柜员协助办理，正在连接柜员…</h1>
        <h3 className='fz_40' style={{marginTop:'35px'}}>接通后，你可通过听筒与远程柜员进行通话</h3>
      </div>
    )
  }
}
export default RepealSuccess;