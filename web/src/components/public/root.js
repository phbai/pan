import React, { Component } from 'react';

class Root extends React.Component {
  render() {
    return (
      <div className="root">
        {this.props.children}
      </div>
    )
  }
}

export default Root;