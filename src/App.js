import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'

class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/contact' component={Contact} />
      </div>  
    </BrowserRouter>
   );
  }
}

export default App;
