import {store} from '@Rvc/Core'
import Header from './containers'
import saga from './saga'
import reducers from './reducer'


store.injectSaga('Header', saga)
store.injectReducer('Header', reducers)

export default Header;