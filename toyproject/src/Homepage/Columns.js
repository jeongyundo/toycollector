
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Columns.css';
import { Row, Col } from 'antd';
import Carddiv from './Card'

class Columnsdiv extends Component {

    render(){
        return(
            <div>
                <div className="gutter-example" style={{padding: "5px"}}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                    </Row>
                </div>
                
                <div className="gutter-example" style={{padding: "5px"}}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Carddiv></Carddiv>
                        </Col>
                    </Row>
                </div>
            </div>  
        )
    }
}

export default Columnsdiv