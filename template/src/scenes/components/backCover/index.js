import React from 'react';
// import {Link} from 'react-router-dom';

export default class BackCvoer extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      boxOffset:''
    }
  }
  componentDidMount(){
    let boxOffset = - document.getElementById('operBox').offsetHeight/2+'px';
   
    this.setState({
      boxOffset:boxOffset
    })
  }

  render() {
    let h = document.documentElement.clientHeight+'px'; 
    return (
      <div className='back_cover' style={{height:h}}></div>
    )
  }

}
