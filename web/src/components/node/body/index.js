import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './header/index'
import Root from '../public/root'


class Node extends Component {
  render() {
    return (
      <Router>
        <Root>
          <Header/>
          <Route path="/node/:nodeName" component={node}/>
        </Root>
      </Router>
    );
  }
}


const node = ({ match }) => {
  return (
    <div>
      <p>{ match.params.nodeName }</p>
    </div>
  )
  
}

export default Node;
