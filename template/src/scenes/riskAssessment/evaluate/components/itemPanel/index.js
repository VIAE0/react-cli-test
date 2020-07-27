import React from 'react'
import Panel from './panel'

class ItemPanel extends React.Component{
  render(){
    return (
 
      <div>
        <h1 className='fz_44'>选择你要评估/查看的项目</h1>
        <Panel/>
        <Panel/>
        <Panel/>
      </div>
    )
  }
}
export default ItemPanel;