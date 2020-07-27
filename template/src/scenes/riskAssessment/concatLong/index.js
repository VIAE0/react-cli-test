import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import ConcatLong from './containers'
import 'Assets/css/password.scss'


store.injectSaga('ConcatLong', saga)

export default ConcatLong;