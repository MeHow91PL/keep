import React, {Component} from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './app/Home';
import './style/Main.css';
=======
import logo from './logo.svg';
import './App.css';
import {Router, Route} from 'react-router-dom';
>>>>>>> 0492650e343a47b53891e46fb60d972f623b6dd2

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Router>
          <Route path='/' component={Home} />
        </Router>
      </div>
    )
=======
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
    );
>>>>>>> 0492650e343a47b53891e46fb60d972f623b6dd2
  }
}

export default App;