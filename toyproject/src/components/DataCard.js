import React, { Component } from 'react'
import './DataCard.css'
class DataCard extends Component {

    constructor(props){
        super(props)
        this.state={spans: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/10)+20;
        this.setState({spans : span})
    }

    render() {

        const { game_detail_url, game_image_raw, releaseDate, game_device, game_description } = this.props.datum;
        const id = this.props.id;

        function nvl(str, defaultStr){
         
            if(typeof str == "undefined" || str == null || str === "")
                str = defaultStr ;  
            return str[0] ;
        }

        function nvl2(str, defaultStr){
         
            if(typeof str == "undefined" || str == null || str.length === 0)
                str = defaultStr ;  
            return str[0] ;
        }

        const image = nvl(game_image_raw, ["https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"])
        const description = nvl2(game_description, ["설명없음"])
        console.log(this.props.datum);
        return (
            
            <div className="ui card" style={{gridRowEnd:`span ${this.state.spans}`}}>
                <div className="image" >
                    <img 
                        ref={this.imageRef}
                        alt={game_detail_url}
                        src={image}
                    />
                </div>
                <div className="content">
                    <a className="header" href={game_detail_url}>{id}</a>
                    <div className="meta">
                        <span className="date">출시일 : {releaseDate}</span>
                    </div>
                    <div className="meta">
                        <span className="date">플랫폼 : {game_device}</span>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

export default DataCard