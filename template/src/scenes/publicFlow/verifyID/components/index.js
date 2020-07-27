import React from 'react'
import ChildID from './verifyID/childID'
import AdultID from './verifyID/adultID'
import Guardian from './verifyID/guardianID'
import imgVerifyID from 'Assets/imgs/pic_verifyID.png'

class VerifyID extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='enter-psd'>
        <div className='psd-img'><img width="100%" src={imgVerifyID} /></div>
        {/* <AdultID />
                <ChildID /> */}
        <Guardian/>
      </div>
    )
  }
}
export default VerifyID;