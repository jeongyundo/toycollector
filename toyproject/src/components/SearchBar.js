import React from 'react'
import './SearchBar.css'
class SearchBar extends React.Component{

    state = { term : ''};

    onFormSubmit = (event) => {
        
        event.preventDefault();
        this.props.onSubmit(this.state.term)

    }

    render(){
        return(
            
            <div className='ui segment'>
                <div className='ui container'>
                    <div className='ui container inner'>
                        <h1>당신만의 한정판을 찾아보세요.</h1>
                        <h2>LMTD는 남들과는 다른 당신만이 가질 한정판 제품을 찾아줍니다.</h2>
                        <h2>당신에게 알맞는 한정판 제품을 찾아보세요.</h2>
                    </div>
                </div>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                    
                        <input 
                            type='text' 
                            placeholder='한정판 제품명 혹은 브랜드로 찾아보세요.'
                            value={this.state.term} 
                            onChange={(e)=> this.setState({term: e.target.value})}>
                        </input>
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar