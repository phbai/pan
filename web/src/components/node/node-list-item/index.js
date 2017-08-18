import React, { Component } from 'react';
import { Row, Col, message } from 'antd';

class NodeListItem extends React.Component {


  render() {
    return (
      <div className="node-list-item">
      	<Row type="flex" justify="space-between">
          <Col span={11}>{this.props.item.key}</Col>
          <Col span={2}>{this.props.item.fsize}</Col>
          <Col span={11} className="text-align-right">{this.props.item.putTime}</Col>
        </Row>
      </div>
    )
  }
}

export default NodeListItem;