import * as React from 'react';
import logo from './assets/logo.svg';
import './style/app.scss';
import HelloWorld from '@/views/helloWorld';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HelloWorld msg={'123'}/>
      </div>
    );
  }
}

export default App;
