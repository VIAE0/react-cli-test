import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import VerifyID from './containers'
import 'Assets/css/password.scss'


store.injectSaga('VerifyID', saga)

export default VerifyID;