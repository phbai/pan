import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './header/index'
import Root from '../public/root'
import Container from '../public/container/index'
import { Row, Col, Table, Button, Upload, Icon, message } from 'antd';

class Node extends Component {
  render() {

    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];

    const props = {
      action: 'http://up-z0.qiniu.com/',
      multiple: true,
      data:{
          token: "Hd9yVDcIRDxD9BOskVm52HVlnEPLijuldYuzTLf6:9VT_BZ32CV3-1dj2l2fUhKBDnwQ=:eyJzY29wZSI6InBoYmFpIiwiZGVhZGxpbmUiOjE1MDI4MTExNjh9",
          key: "测试",
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} 上传成功`);
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
            <Row type="flex" justify="space-between">
              <Route path="/node/:nodeName" component={node}/>

              <Upload {...props}>
                <Button>
                  <Icon type="upload" /> 上传文件
                </Button>
              </Upload>
            </Row>
            
            <Row>
              <Table size="small" dataSource={dataSource} columns={columns} />
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
