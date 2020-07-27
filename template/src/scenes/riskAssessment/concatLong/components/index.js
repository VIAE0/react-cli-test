import React from 'react'
import ConcatTeller from './concatTeller'
import PickPhone from './pickPhone'

class ConcatLong extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <ConcatTeller/>
    // <PickPhone/>
    )
  }
}
export default ConcatLong;