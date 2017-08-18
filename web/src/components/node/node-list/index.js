import React, { Component } from 'react';
import NodeListItem from '../node-list-item/index'
import { Row, Col, message } from 'antd';

class NodeList extends React.Component {


  render() {
    return (
      <div className="node-list">
        <div className="node-list-header">
            <Row type="flex" justify="space-between">
                <Col span={11}>文件名</Col>
                <Col span={2} >文件大小</Col>
                <Col span={11} className="text-align-right">上传时间</Col>
            </Row>
        </div>
        {this.props.list && this.props.list.map((item) => {
            return (
                <NodeListItem item={item}></NodeListItem>
            )
        })}
        
      </div>
    )
  }
}

export default NodeList;