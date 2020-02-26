import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Carousel.css';
import { Carousel } from 'antd';

class Carouseldiv extends Component {

    render(){
        return(
            <Carousel autoplay>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
            </Carousel>
        )
    }

}

export default Carouseldiv
          