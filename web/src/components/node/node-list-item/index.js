import React, { Component } from 'react';
import { Row, Col, message } from 'antd';
import './index.css'
import { formatFileSize, parseTime } from '../../public/tool'


class NodeListItem extends React.Component {

  render() {
    return (
      <div className="node-list-item">
      	<Row type="flex" justify="space-between">
          <Col span={11}>{this.props.item.key}</Col>
          <Col span={2}>{formatFileSize(this.props.item.fsize)}</Col>
          <Col span={11} className="text-align-right">{parseTime(this.props.item.putTime)}</Col>
        </Row>
      </div>
    )
  }
}

export default NodeListItem;