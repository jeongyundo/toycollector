import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import DataList from './DataList';
import Menu from './Menu';

class App extends Component {

    state = { images: [], response: {}, data: []};

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            
        });

        this.setState( {images: response.data.results});
    }
    
    async componentDidMount () {
        const response = await axios.get('https://raw.githubusercontent.com/jeongyundo/toycollector/master/toyproject/nintendo_200228.json', {
            
        })
        console.log(response.data)
        this.setState({response : response.data})
    }

    render(){
        return(
            <div className='ui container'>
                <Menu></Menu>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                <ImageList images={this.state.images}></ImageList>
                <DataList data={this.state.response}></DataList>
            </div>
        );
    }
}

export default App;