import React from 'react'
class Toast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:'推荐人分配比例，加起来需等于100%'
    }
  }
  componentDidMount(){
    let title = this.props.title;
    this.setState({
      title:title
    })
  }
  render(){
    return (
      <div className='toast'>
        <span className='error icon-error'></span>
        <h1 className='fz_36'>{this.state.title}</h1>
          
      </div>
    )
    
  }
}
export default Toast;