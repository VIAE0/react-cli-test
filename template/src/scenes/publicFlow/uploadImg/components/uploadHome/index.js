import React from 'react';
import GoBack from '../../../../components/goback';
import SwiperCon from './swiperCon'

class UploadHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className=''>
        <h1 className='fz_44'>请拍摄直系亲属或监护关系证明（最少一张）</h1>
        <h3 className='fz_36'>可证明代理人与被代理人为直系亲属关系的户口簿或出生证等证明类材料</h3>
        <div className='swiper-con'><SwiperCon/> </div>
               
        <button className='fz_32 btn-sure'>确认</button>
        <GoBack />
      </div>
    )
  }
}
export default UploadHome;