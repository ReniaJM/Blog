import React, { Component} from 'react';
import { connect } from 'react-redux'
import {fetchNewsItem} from "../../actions/actions";
import ItemDetails from "../present/ItemDetails";

class NewsDetails extends Component {

    componentDidMount() {
        var itemfakenews = {
            id: '1',
            title: 'Mad owl chases car',
            text: 'Mad owl seen tormenting drivers in Morecambe',
            body: `Morecambe - Tuesday 8th August 2017

            Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
            Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
        };

        this.props.dispatch(fetchNewsItem(itemfakenews))
    }

    render(){

       let {newsItem} = this.props;

        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    {newsItem ? <ItemDetails data={newsItem}/> : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem
    }
}

export default connect(mapStateToProps)(NewsDetails)