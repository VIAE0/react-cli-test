import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import Result from './containers'
import 'Assets/css/problem.scss'


store.injectSaga('Result', saga)

export default Result;