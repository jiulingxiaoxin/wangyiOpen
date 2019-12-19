import React from 'react';
import 'assets/styles/reset.css'
import store from './store/index'
import { Provider } from 'react-redux'

import Layout from './pages/home/layout'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>  
        <Layout></Layout>
      </Provider>
    );
  }
}

export default App;
