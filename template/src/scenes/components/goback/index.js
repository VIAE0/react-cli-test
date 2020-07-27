import React from 'react';
// import {Link} from 'react-router-dom';

export default class GoBack extends React.PureComponent {

  onHangup(){
    //关闭连线
  }
  onMakeCall(){
    //关闭连线
  }
  backToHome(){
    // this.nextProcess('/home','back to home')
  }

  render() {

    return (
      <button className='fz_32 go-back' >上一步</button>
    )
  }

}
