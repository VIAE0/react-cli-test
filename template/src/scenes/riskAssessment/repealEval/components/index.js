import React from 'react'

import RepalHome from './repealHome'
import RepealRecord from './repealRecord'
import RepealSuccess from './repealSuccess'
import imgTeller from 'Assets/imgs/pic_teller.png'


class Repeal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='repeal'>
        <div className='teller'>
          <img src={imgTeller}/>
          <p className='fz_24'>远程柜员号 12345</p>
        </div>
        {/* <RepalHome/> */}
        <RepealRecord/>
        {/* <RepealSuccess/> */}
      </div>
    )
  }
}
export default Repeal;