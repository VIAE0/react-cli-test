import React from 'react';

import saga from './saga'
import {store} from '@Rvc/Core'
import Prompt from './containers'
import 'Assets/css/prompt.scss'


store.injectSaga('Prompt', saga)

export default Prompt;