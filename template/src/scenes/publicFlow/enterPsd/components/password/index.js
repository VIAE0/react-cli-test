import React from 'react';
import PropTypes from 'prop-types'
import imgPwd from 'Assets/imgs/pic_psd.png'


export default class EnterPsd extends React.PureComponent {
  static propTypes = {
    ICCardReg: PropTypes.string.isRequired
  }
  constructor(props){
    super(props);
    this.state={
      psdList:''
    }
  }

  psdChange=(e)=>{
    let psd = e.target.value;
    this.setState({
      psdList:psd
    })

  }


  render() {
    return (
      <div className='enter-psd'>
        <div className='psd-img'><img width="100%" src={imgPwd} /></div>
        <div className='pas-content'>
          <h3  className='fz_40'>请输入取款密码</h3>
          <div  className='fz_36'>
            <span>银行卡卡号</span>
            <span className="card-num">{this.props.ICCardReg}</span>
          </div>
          
          <div style={{position:'relative'}}>
            <input type='number' maxLength='6' className="real-psd" onChange={this.psdChange}/>
            <div className='psd-group'>
              <input type='password' maxLength='1' />
              <input type='password' maxLength='1' />
              <input type='password' maxLength='1' />
              <input type='password' maxLength='1' />
              <input type='password' maxLength='1' />
              <input type='password' maxLength='1' />
              <input type='password' maxLength='1' />
            </div>
            
          </div>
        </div>
      </div>
    )
  }

}
