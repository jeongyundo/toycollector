import React from 'react';
import axios from 'axios'
import './Header.css'
import SearchBar from './SearchBar';


class Header extends React.Component {

    state = { data: {}};

    onSearchSubmit = async term => {
        const response = await axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/432246a7-e7af-42bf-bd8b-d42d9370ba38/nintendo_200228.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45CI6S5YHA%2F20200228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200228T020854Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBviK8L4jllNMcu9BtJza740KLg4LOIl1Yig%2FdUbhb5jAiB3awO8Le3Ec521qdxT3CauHxEXNm0npD92ohj59jiopyq9AwjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI3NDU2NzE0OTM3MCIMAi1LxASph6Oj98r0KpED3Xi%2Bj7ayfYdVs8VTYno9nGVSyJnwHWJTSH1hRfvBc5lIr7%2FNzdTKzstAH61VX4irhdsjbs7u1Kjj%2BxVigPUvGRoPRb1Sf5qqKpVYlJJF8xjsMNX3H%2BfDhm2%2Fmi2b51SnLoOCU%2BiD1ZshEUHamo5IOp7c7vvW%2Fqgyd8MaDTslANYhYiCVDEYlWV2BDGGN6TxOsBZtbHp9zBoUOWM3UEuJX97lardII5vFQHEMxiLOcdI0Y5iFOYjBqoKqqMEWAE42AWOTUcPRV2wg0Poz8tLANdTTdq%2BaOaSwvTkcqA4LoyIuIL5KpC9jayo%2BKAsggDbRtmnNQngBHjBK%2BAubCzrYIfvwLu5l8ww7aki4uXhf%2FyPbWUwnXBFDEz9uwHvT0UCm05dXFVd0Dq%2B%2FFWP9zU1uqH1FQ7hKcHy%2BzQSACIB6fkeYjphxankSz9Fav89qcSHbpLLeOGgUmFz1fWwNxlG05XnCkRs07eN1%2F9Ne%2B5Xm2x9MVFj5WKkQOmL7t2CeqDye3kACCdr82x5e6OzHOniHEGUw25bh8gU67AEHXPRzV9kQVuOW1ZqESn7YBxwqPSrF3yQTRBaWpyAf%2BG6FLcxNFwzb0thd48rLxa13eKEhGQjpKN8IskwVh8QqEAHSL2kvkZo8oahxkOLqYjrt687x2FvX8qFfX6NxJNfqp5s1tD2OP1Mzf70BqwcYVsOOV%2Fn1A4pb98HsgBC%2FzqvnjBz74zm5S%2B99mbbT4zXabfZyNtf3vNfOki%2BTmYrCSkfaQjVnOYT3KPtu5T3u4YGSImrQ5EPoDWRQhxSyrXtX3eo2hPqgcCokF%2FJbitQ6BTlMWa1rEY6FR0aPcvJPoMp%2BUtDcXVlLYJfMag%3D%3D&X-Amz-Signature=c691e5a3ad186af74fef2935b0e699e616dc288677ec50e8a2d67162366ea8c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22nintendo_200228.json%22', {
            
        });
        console.log("1")
        console.log(response)
        this.setState({data: response.data});
        var obj = Object.values(this.state.data)
        console.log(obj)
        
    }

    render() {
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