import React from 'react'

import UploadHome from './uploadHome'

class UploadImg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='upload'>        
        <UploadHome/>
      </div>
    )
  }
}
export default UploadImg;