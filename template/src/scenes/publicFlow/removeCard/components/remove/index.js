import React from 'react';


export default class AdultID extends React.PureComponent {

  onHangup(){
    //关闭连线
  }
  onMakeCall(){
    //关闭连线
  }
  backToHome(){
    // this.nextProcess('/home','back to home')
  }
  constructor(){
    super()
    this.state = {
    
    }
  }


  render() {
   
    return (
      <div className='pas-content'>
        <h3  className='fz_56' style={{lineHeight:'84px'}}>请取走你的银行卡</h3>
        <p  className='fz_36'>感谢你对招商银行的支持</p>     
        <div className='fz_28' style={{color:'#ABABAB',marginTop:'100px'}}>
          <span className='fz_56'>120</span>秒后将自动退出
        </div>
      </div>
    )
  }

}
