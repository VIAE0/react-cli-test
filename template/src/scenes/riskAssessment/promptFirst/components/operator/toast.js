import React from 'react'
class Toast extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <div className='toast'>
        <span className='error icon-error'></span>
        <h1 className='fz_36'>推荐人分配比例，加起来需等于100%</h1>
          
      </div>
    )
    
  }
}
export default Toast;