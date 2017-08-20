import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from '../node-header/index'
import NodeList from '../node-list/index'
import Root from '../public/root'
import Container from '../public/container/index'
import { Row, Col, Table, Button, Upload, Icon, message } from 'antd';
import './index.css'

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      token: '',
    };
  }

  async componentWillMount() {
    // const self = this;
    const token = await this.getToken();
    this.setState({token: token});
    console.log(this.state.token);
  }

  async componentDidMount() {
    this.refreshList();
  }


  parseTime(timestamp) {
    return new Date(parseInt(timestamp / 10000)).toLocaleString();
  }

  formatFileSize(fileSize, idx = 0) {  
    const units = ["B", "KB", "MB", "GB"];  
    if (fileSize < 1024 || idx === units.length - 1) {  
        return fileSize.toFixed(1) + units[idx];  
    }  
    return this.formatFileSize(fileSize / 1024, ++idx);  
  } 

  async refreshList() {
    let list = await this.getList();
    this.setState({ list: list });
  }

  async getList() {
    const self = this;

    return new Promise((resolve) => {
      fetch("http://localhost:8080/list/").then((res) => {
        res.json().then((value) => {
          resolve(value.result);
        });
      });
    });
    
  }

  getToken() {
    return new Promise((resolve) => {
      fetch("http://localhost:8080/token").then((res) => {
        res.json().then((value) => {
          resolve(value.result);
        })
      });
    });
    
  }

  render() {
    const self = this;

    const dataSource = this.state.list.map((item, index) => {
      return {
        key: index,
        name: item.key,
        size: self.formatFileSize(item.fsize),
        time: self.parseTime(item.putTime),
      }
    });

    const columns = [{
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '文件大小',
      dataIndex: 'size',
      key: 'size',
    }, {
      title: '上传时间',
      dataIndex: 'time',
      key: 'time',
      sortOrder: 'descend',
    }];

    const props = {
      action: 'http://up-z0.qiniu.com/',
      multiple: true,
      showUploadList: false,
      data: (file) => {
        return {
          token: this.state.token,
          key: file.name,
        }
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功`);
          self.refreshList();
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败`);
        }
      },
    };

    return (
      <Router>
        <Root>
          <Header/>
          <Container>
            <Row className="custom-row" type="flex" justify="space-between" align="middle">
              <Route path="/node/:nodeName" component={node}/>

              <Upload {...props}>
                <Button type="primary">
                  <Icon type="upload" /> 上传文件
                </Button>
              </Upload>
            </Row>

            <Row className="custom-row">
              <NodeList list={this.state.list}></NodeList>
            </Row>
          </Container>
          
        </Root>
      </Router>
    );
  }
}


const node = ({ match }) => {
  return (
    <p>当前节点：{ match.params.nodeName }</p>
  )
  
}

export default Node;
