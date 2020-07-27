import React from 'react'
import PropTypes from 'prop-types'
import { SWIPE_CARD_SAGA } from '../../actions/sagaActionType'
import imgQRCode from 'Assets/imgs/pic_qrCode.png'
import imgSlotCard from 'Assets/imgs/pic_slotCard.png'

export default class Launcher extends React.PureComponent {
  constructor(props){
    super(props)
  }
  static propTypes = {
    dispatchAction: PropTypes.func.isRequired
  }


  readCard=(action)=>{
    this.props.dispatchAction(action)
    console.log('swipeCard Panel :', action, this.props)
  }

  render(){
    return (
      <ul className='menu-validate'>
        <li className='menu-item'>
          <div className='div-img'><img src={imgQRCode} /> </div>
          <div className='fz_32'><span className='icon-m2'></span>扫码验证</div>
          <p className='fz_28'>打开招商银行App扫码并完成验证</p>
        </li>
        <li className='fz_28'>或</li>
        <li className='menu-item' onClick={this.readCard.bind(this, SWIPE_CARD_SAGA)}> 
          <div className='div-img'><img src={imgSlotCard} /></div>
          <div className='fz_32'><span className='icon-m2'></span>刷卡验证</div>
          <p className='fz_28'>磁条卡请刷磁条，其他卡片请刷芯片</p>
        </li>
      </ul>
      
    )
  }
}