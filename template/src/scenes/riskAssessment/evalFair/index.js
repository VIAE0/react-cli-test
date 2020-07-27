import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import evalFair from './containers'
import 'Assets/css/problem.scss'


store.injectSaga('evalFair', saga)

export default evalFair;