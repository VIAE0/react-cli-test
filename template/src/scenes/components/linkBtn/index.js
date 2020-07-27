import React from 'react';

class LinkBtn extends React.Component{
  constructor(props){
    super(props)
    this.state={
      text:''
    }
    console.log(this.props)

  }

  componentDidMount(){
    this.setState({
      text:this.props.text
    })
  }
    
  render(){
    const btnStyle={
      styles:{
        width:this.props.width,
        height:this.props.height
      }
    }
    return(
      <button style={btnStyle.styles} className='fz_24 link-btn'>{this.state.text}</button>
    )
  }
}

export default LinkBtn;