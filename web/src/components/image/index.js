import React, { Component } from 'react';
import "./index.css"

class Image extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
  	// let imageStyle = {
  	// 	margin: "0 auto",
  	// 	verticalAlign: "middle"
  	// };

    return (
      <img className="image" src={this.props.src}/>
    )
  }
}

export default Image;