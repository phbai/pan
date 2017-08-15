import React, { Component } from 'react';
import './index.css'

class Root extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

export default Root;