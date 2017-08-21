import React, { Component } from 'react';
import "./index.css"
import classNames from 'classnames';

class Image extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
  	// let imageStyle = {
  	// 	margin: "0 auto",
  	// 	verticalAlign: "middle"
  	// };

    const classString = classNames("image", this.props.className);
    return (
      <img className={classString} src={this.props.src}/>
    )
  }
}

export default Image;