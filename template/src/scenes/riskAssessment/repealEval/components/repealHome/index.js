import React from 'react';
import ResultList from '../../../../components/resultList'
import GoBack from '../../../../components/goback';

class RepealHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
           
    }
  }
 
  render() {
    return (
      <div className='result-home'>
        <h1 className='fz_44'>撤销风险评估</h1>
        <h3 className='fz_36'>你确定要撤销最近一次风险评估吗？</h3>
        <ResultList/>
        <button className='fz_32 btn-repeal'>确认撤销</button>
        <GoBack />
      </div>
    )
  }
}
export default RepealHome;