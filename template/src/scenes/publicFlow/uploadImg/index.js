import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import uploadImg from './containers'
import 'Assets/css/upload.scss'


store.injectSaga('uploadImg', saga)

export default uploadImg;