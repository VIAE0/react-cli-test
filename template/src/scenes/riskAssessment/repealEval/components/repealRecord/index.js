import React from 'react';
import ResultList from '../../../../components/resultList'
import GoBack from '../../../../components/goback';

class RepealRecord extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      scrollTop:0,
      len:0
    }
  }
  componentDidMount(){
    var scrollTop = content.scrollTop;

    let len = document.getElementsByTagName('tr').length*125-500;

    this.setState({
      scrollTop:scrollTop,
      len:len
    })
  }

  scrollMove(step){
    let content = document.getElementById('content');
    let top = this.state.scrollTop+step;
    this.setState({
      scrollTop:top
    })
    content.scrollTo({
      top:top,
      behavior:'smooth'
    })
  }
  nextFn=()=>{
      this.scrollMove(200)
    
  }
  prevFn=()=>{
    this.scrollMove(-200)
  }

  render() {
    return (
      <div className='result-home '>
        <h1 className='fz_44'>风险评估撤销记录</h1>
        <h3 className='fz_36'>以下是你的风险评估撤销记录</h3>
        <table>
          <thead>
            <tr className='fz_28'>
              <td>办理时间</td>
              <td>开户网点</td>
              <td>办理渠道</td>
              <td>风险等级</td>
            </tr>
          </thead>
          <tbody id="content">
            <tr className='fz_28'>
              <td>2013-09-30</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-31</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-32</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-33</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-34</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-32</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-33</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-34</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr> <tr className='fz_28'>
              <td>2013-09-32</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-33</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-34</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr> <tr className='fz_28'>
              <td>2013-09-32</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-33</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
            <tr className='fz_28'>
              <td>2013-09-34</td>
              <td>上海浦东新区黄浦大桥网点营业厅</td>
              <td>可视柜台人工</td>
              <td>A2(稳健性)</td>
            </tr>
          </tbody>
       
        </table>
        <div className= 'btn-direct'>
            <span className="icon-pre" style={{opacity:(this.state.scrollTop? 1: 0.3)}} onClick={this.prevFn}></span>
            <span className="icon-next" style={{opacity:(this.state.scrollTop>this.state.len? 0.3:1)}} onClick={this.nextFn}></span>
        </div>
        <GoBack />
      </div>
    )
  }
}
export default RepealRecord;