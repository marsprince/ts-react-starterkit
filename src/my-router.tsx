import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HelloWorld from '@/views/helloWorld';
import App from '@/app';

class MyRouter extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={App}/>
          <Route exact path="/hello" component={HelloWorld}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default MyRouter;
