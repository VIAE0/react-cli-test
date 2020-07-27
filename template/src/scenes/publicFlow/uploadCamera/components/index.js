import React from 'react'

import Camera from './camera'
import LookImg from './lookImg'
import imgOut from 'Assets/imgs/btn_out.png'


class UploadCamera extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (  
      <div className='upload-camera'>
        <Camera/>
        {/* <LookImg/> */}
        <div className='close'>
          <img src={imgOut}/>
        </div>
      </div>
             
    )
  }
}
export default UploadCamera;