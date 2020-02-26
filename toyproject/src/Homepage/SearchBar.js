
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

class SearchBar extends Component{
    render(){
        return(
            <div>
                <h1></h1>
                <Search
                placeholder="한정판 제품명 혹은 브랜드로 찾아보세요."
                enterButton="찾기"
                size="large"
                onSearch={value => console.log(value)}
                />
            </div>
        )
    }
}

export default SearchBar