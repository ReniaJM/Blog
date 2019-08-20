import React, { Component} from 'react';
import { connect } from 'react-redux'
import ListItem from "../present/ListItem";

class News extends Component {
    render(){

        const newsItems = this.props.news.map( (news, i) => {
            return ( <li key={i}><ListItem data = {news} /></li> );
        });

        return (
            <div>
                <h2>News Items</h2>
                <ul>
                    {newsItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(News)