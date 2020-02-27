import React from 'react';
import axios from 'axios'
import './Header.css'
import SearchBar from './SearchBar';


class Header extends React.Component {

    state = { data: []};

    onSearchSubmit = async term => {
        console.log(term)
        const response = await axios.get('', {
            params: { query: term },
            headers: {

            }
        });
        this.setState({images: response});
    }

    render(){
        return(
            <div className='ui-container'>
                <div className='ui-container-inner'>
                    <div>
                            <h1>당신만의 한정판을 찾아보세요.</h1>
                        </div>
                        <div>
                            <h2>LMTD는 남들과는 다른 당신만이 가질 한정판 제품을 찾아줍니다.</h2>
                                <h2>당신에게 알맞는 한정판 제품을 찾아보세요.</h2>
                        </div>
                        <SearchBar className='searchbar' onSubmit={this.onSearchSubmit}></SearchBar>
                </div>
            </div>
        )
    }
}

export default Header;