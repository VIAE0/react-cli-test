import React from 'react';
import {Routes} from '@Rvc/Core';
import {Redirect} from 'react-router-dom'
import routes from './routes'
import Header from './scenes/components/header';
import commonReducer from './reducer'
import commonSaga from './saga'
import {store} from '@Rvc/Core'

const App = () => {
  return (
    <div>
      <Header/>
      <Redirect path='/' to='/home' />
      <Routes routes={routes}/>
     
    </div>
  );
};

store.injectReducer('Common', commonReducer)
store.injectSaga('Common', commonSaga)

export default App;
