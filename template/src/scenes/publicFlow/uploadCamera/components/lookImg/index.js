import React from 'react';
import Swiper from 'swiper';
import 'Assets/css/swiper.min.css'
import imgQRCode from 'Assets/imgs/pic_qrCode.png'
import imgTeller from 'Assets/imgs/pic_teller.png'
import imgDel from 'Assets/imgs/btn_del.png'
import imgRephoto from 'Assets/imgs/btn_rephoto.png'

class LookImg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }

  componentDidMount(){
    let swiperBox = new Swiper('.swiper-container',{
      slidesPerView:1,
      pagination:{
        el:'.swiper-pagination',
        bulletActiveClass:'self-bullet-acvtive'
      },
      spaceBetween:20,
    })
  }
 
  render() {
    let h = document.documentElement.clientHeight;
    return (
      <div className='camera-content' style={{height:h}}>
        <div className='camera-box swiper-container'>

          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img width="100%"  src={imgQRCode}/>
            </div>
            <div className='swiper-slide'>
              <img width="100%"   src={imgTeller}/>
            </div>
            <div className='swiper-slide'>
              <img width="100%"   src={imgQRCode}/>
            </div>
          </div>
          <div className="swiper-pagination"></div>
                    

        </div>
        <ul>
          <li className='btn' style={{marginTop:h/3}}><img src={imgDel}/> </li>
          <li className='btn'><img src={imgRephoto}/> </li>
        </ul>
      </div>

           
    )
  }
}
export default LookImg;