import React from 'react'
import ProlemItem from './prolemItem'
import Dialog from './dialog'
import Risk from './riskProtocol'

class Prolems extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div>
        {/* <ProlemItem/> */}
        {/* <Dialog/> */}
        <Risk/>
                
      </div>
    )
  }
}
export default Prolems;