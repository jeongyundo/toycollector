import React, { Component } from 'react';
import EditableTable from './EditableTable'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="App-logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>데이터 관리</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>데이터 관리</Breadcrumb.Item>
              <Breadcrumb.Item>리스트</Breadcrumb.Item>
            </Breadcrumb>
            <EditableTable/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
