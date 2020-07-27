// import RvcCore from '@Rvc/Core'
import RvcAjax from '@Rvc/Ajax';
import {GetDeviceCounterNoReq} from './getDeviceCounterNoDef'

export default class GetDeviceCounterNo {
  constructor(){
    this.ajax = RvcAjax()
    // this.rsa = 
  }
  
  getDeviceCounterNo() {
    const req = new GetDeviceCounterNoReq()
    req.BaseTerminalNo = '7712015002'
    req.isSupportPrint = false

    this.ajax.post('http://localhost:8003/api/RVC.YZX.Web/CommonFlow/GetDeviceCounterNo', req, (err) => {
      window.console.log("post err : ",err);
      throw err;
    }).then((res) => {
      window.console.log('res = ', res)
      if(res.ok){
        return res.json();
      }
    }).then((json) => {
      window.console.log('ajax response : ', json);
    }).catch( err => {
      window.console.log('err : ', err);
    });
  }

}