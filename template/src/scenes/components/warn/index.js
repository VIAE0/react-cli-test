import React from 'react';


export default class Warn extends React.PureComponent {

  constructor(props){
    super(props)
    this.state = {
      offH:'160px',
      title:'未成年客户进行风险评估，需加验监护人信息'
    }
  }

  componentDidMount(){
    if(this.props){
      this.setState({
        title:this.props.title
      })
    }
  }


  render() {

    return (
      <p  className='fz_24 warning'>{this.state.title}</p>
    )
  }

}
