import React from 'react';
import './Header.css'
import SearchBar from './SearchBar';

const Header = () => {
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
                    <SearchBar className='searchbar'></SearchBar>
            </div>
        </div>
    )
};

export default Header;