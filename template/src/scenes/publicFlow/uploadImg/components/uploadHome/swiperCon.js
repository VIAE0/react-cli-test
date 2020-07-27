import React from 'react';
import Swiper from 'swiper';
import 'Assets/css/swiper.min.css'
import imgQRCode from 'Assets/imgs/pic_qrCode.png'
import imgCamera from 'Assets/imgs/pic_camera.png'
import imgPrev from 'Assets/imgs/prev.png'

class SwiperCon extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }

  componentDidMount(){
    let swiperBox = new Swiper('.swiper-container',{
      slidesPerView:2,
      pagination:'.swiper-pagination',
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      spaceBetween:20,
    })
  }
 
  render() {
    return (
      <div>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <input className='input-upload' type="file" title='开启摄像头'  />
              <img className='img-res' src={imgQRCode}/>
              <div className='camera'>
                <div>
                  <img src={imgCamera} />
                  <span className='fz_24'>点击拍照</span>
                </div>
                        
              </div>
              <span  className='fz_32'>监护关系证明1</span>
            </div>
            <div className='swiper-slide'>
              <input className='input-upload' type="file" title='开启摄像头'  / >
              <img className='img-res' src={imgCamera}/>
              <div className='camera'>
                <div>
                  <img src={imgCamera} />
                  <span className='fz_24'>点击拍照</span>
                </div>
                        
              </div>
              <span  className='fz_32'>监护关系证明2</span>
            </div>
            <div className='swiper-slide'>
              <input className='input-upload' type="file" title='开启摄像头'  / >
              <img className='img-res' src={imgCamera}/>
              <div className='camera'>
                <div>
                  <img src={imgCamera} />
                  <span className='fz_24'>点击拍照</span>
                </div>
                        
              </div>
              <span  className='fz_32'>监护关系证明3</span>
            </div>
                    
          </div>
                
        </div>
        <div className='swiper-button-next'>
          <img src={imgPrev} />
        </div>
        <div className='swiper-button-prev'>
          <img src={imgPrev} />
        </div>
      </div>
    )
  }
}
export default SwiperCon;