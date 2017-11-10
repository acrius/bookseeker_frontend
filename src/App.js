import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './apps/store';
import Routes from './apps/routes';
import Header from './apps/main/components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className='wrapper'>
            <Header />
            <main className='main_content'>
              <Routes />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
