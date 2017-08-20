import React, { Component } from 'react';
import NodeListItem from '../node-list-item/index'
import { Row, Col, message } from 'antd';
import './index.css'

class NodeList extends React.Component {


  render() {
    return (
      <div className="node-list">
        <div className="node-list-header">
            <Row type="flex" justify="space-between">
                <Col span={11} className="node-list-header-title">文件名</Col>
                <Col span={6} className="node-list-header-title">文件大小</Col>
                <Col span={5} className="node-list-header-title">上传时间</Col>
                <Col span={2}></Col>
            </Row>
        </div>
        {this.props.list && this.props.list.map((item) => {
            return (
                <NodeListItem item={item} key={item.key}></NodeListItem>
            )
        })}
        
      </div>
    )
  }
}

export default NodeList;