import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import RepealEval from './containers'
import 'Assets/css/repeal.scss'


store.injectSaga('RepealEval', saga)

export default RepealEval;