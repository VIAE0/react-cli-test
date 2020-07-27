import React from 'react';

import imgCamera from 'Assets/imgs/pic_camera.png'
import imgRephoto from 'Assets/imgs/btn_rephoto.png'
import imgTrue from 'Assets/imgs/btn_true.png'

class Camera extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }

  componentDidMount(){
    let cameraBox = document.getElementById('cameraBox');
    let t = cameraBox.getBoundingClientRect().top
    let l = cameraBox.getBoundingClientRect().left
    let r = cameraBox.getBoundingClientRect().right
    let b = cameraBox.getBoundingClientRect().bottom
    console.log(t+','+l)
    console.log(t+','+r)
    console.log(b+','+l)
    console.log(b+','+r)
  }

  render() {
    let h = document.documentElement.clientHeight;
    return (
      <div className='camera-content' style={{height:h}}>
        <div className='camera-box' id='cameraBox'></div>
        <ul>
          <li className='photo' style={{marginTop:h/3}}><img src={imgCamera}/> </li>
          <li className='btn' style={{marginTop:h/3}}><img src={imgRephoto}/> </li>
          <li className='btn'><img src={imgTrue}/> </li>
        </ul>
      </div>
    )
  }
}
export default Camera;