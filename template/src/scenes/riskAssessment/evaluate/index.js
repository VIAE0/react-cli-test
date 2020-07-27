// import React from 'react';
import 'Assets/css/reset.scss'
import 'Assets/css/home.scss'
import saga from './saga'
import {store} from '@Rvc/Core'
import Evaluate from './containers'


store.injectSaga('Evaluate', saga)

export default Evaluate;