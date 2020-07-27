import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import RemoveCard from './containers'
import 'Assets/css/password.scss'


store.injectSaga('RemoveCard', saga)

export default RemoveCard;