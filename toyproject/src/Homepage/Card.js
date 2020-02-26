
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Card, Icon, Avatar } from 'antd';
import { Row, Col } from 'antd';

const { Meta } = Card;

class Carddiv extends Component {

    render(){
        return (
            <Card
                style={{ width: 200 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                title="Card title"
                description="This is the description"
                />
            </Card>
        )
    }
}


export default Carddiv
          