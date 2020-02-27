
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

class SearchBar extends Component{
    state = { term : ''};

    onFormSubmit = (event) => {
        
        event.preventDefault();
        this.props.onSubmit(this.state.term)

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <Search
                        placeholder="한정판 제품명 혹은 브랜드로 찾아보세요."
                        enterButton="찾기"
                        size="large"
                        onSearch={value => this.setState({ term :value}) }
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar