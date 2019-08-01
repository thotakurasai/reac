import React from 'react';
import {Homepage} from './homepage/homepage';
import {About} from './homepage/about';
import {Users} from './homepage/users';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    usersdata: []
    };
    }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
    this.setState({usersdata:res.data})
    })
  .catch(function (error) {
  console.log(error);
  })
  }    
    render(){return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Homepage} />
        <Route path="/about/" component={About} />
        <Route path="/users/" render = { () => <Users users_data = {this.state.usersdata} /> } />
      </div>
    </Router>
      
    );
  }
}

export default App;
