import React from 'react'
import RemoveCard from './remove'
import imgRemoveCard from 'Assets/imgs/pic_removeCard.png'

class Remove extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='enter-psd'>
        <div className='psd-img'><img width="100%" src={imgRemoveCard} /></div>
            
        <RemoveCard />
      </div>
    )
  }
}
export default Remove;