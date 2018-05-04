import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import MainPage from './MainPage';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' component={MainPage} />
        </Router>
      </div>
    );
  }
}

export default App;
