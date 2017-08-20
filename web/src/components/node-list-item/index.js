import React, { Component } from 'react';
import { Row, Col, message, Icon } from 'antd';
import { formatFileSize, parseTime, isImage, downloadFile } from '../public/tool'
import Image from '../image/index'
import config from '../public/config'
import "classnames"
import './index.css'

class NodeListItem extends React.Component {
  constructor(props) {
    super(props);

    this.downloadFile = this.downloadFile.bind(this);
  }

  downloadFile() {
    const url = `${config.domain + this.props.item.key}`;
    downloadFile(url);
  }

  render() {
    let fileIcon = null;

    let imageStyle = {
      margin: "20px"
    }

    if (isImage(this.props.item)) {
      fileIcon = <Image className="node-list-item-image" style={imageStyle} src={ `${config.domain + this.props.item.key + config.rule}`}/>;
    } else {
      fileIcon = <Icon className="node-list-item-icon" type="file" style={{ fontSize: 18, verticalAlign: 'middle' }}/>;
    }
    
    return (
      <div className="node-list-item">
      	<Row type="flex" justify="space-between" align="middle">
          <Col span={11}>
            { fileIcon }
            <span className="node-list-item-title">{this.props.item.key}</span>
          </Col>
          <Col span={6}>{formatFileSize(this.props.item.fsize)}</Col>
          <Col span={5}>{parseTime(this.props.item.putTime)}</Col>
          <Col span={2}>
            <Icon type="cloud" onClick={this.downloadFile} className="node-list-item-download-icon"></Icon>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NodeListItem;