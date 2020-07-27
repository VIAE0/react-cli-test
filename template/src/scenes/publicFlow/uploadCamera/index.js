import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import uploadCamrea from './containers'
import 'Assets/css/upload.scss'


store.injectSaga('uploadCamrea', saga)

export default uploadCamrea;