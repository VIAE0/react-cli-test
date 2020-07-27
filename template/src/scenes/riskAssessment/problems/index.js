import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import Problems from './containers'
import 'Assets/css/problem.scss'


store.injectSaga('Problems', saga)

export default Problems;