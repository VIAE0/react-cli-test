// import React from 'react';
import saga from './saga'
import reducerHome from './reducers'
import {store} from '@Rvc/Core'
import Home from './containers'

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Launcher />
//       <Shotcuts />
//     </div>
//   );
// };

store.injectReducer('Home', reducerHome)
store.injectSaga('Home', saga)


export default Home;