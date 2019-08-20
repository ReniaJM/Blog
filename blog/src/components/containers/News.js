import React, { Component} from 'react';
import { connect } from 'react-redux'
import ListItem from "../present/ListItem";
import {fetchNews} from "../../actions/actions";

class News extends Component {
    componentDidMount() {
        var fakenews = [{
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe'
        }, {
            id: '2',
            title: 'Owl stowaway',
            teaser: 'Despicable owl impersonates passenger to board flight to Luton'
        }];

        this.props.dispatch(fetchNews(fakenews))
    }

    render(){

        const newsItems = this.props.news.map( (news, i) => {
            return ( <li key={i}><ListItem data = {news} /></li> );
        });

        return (
            <div>
                <h2>News Items</h2>
                <ul>
                    {(this.props.news.length >0 ? <ul>{newsItems }</ul> : <div>Sorry empty news</div>)}
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