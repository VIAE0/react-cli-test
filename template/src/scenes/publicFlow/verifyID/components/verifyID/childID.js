import React from 'react';


export default class ChildID extends React.PureComponent {

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
        <h3  className='fz_56' style={{lineHeight:'84px'}}>未成年人身份证验证</h3>
        <p  className='fz_36'>请放置<span style={{color:'#FF8420'}}>**成</span>身份证进行扫描</p> 
      </div>
    )
  }

}
