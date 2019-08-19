import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class ListItem extends Component {
    render() {
        return (
            <div>
                <div><Link to={`/news/${this.props.id}`}><b>{this.props.title}</b></Link></div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ListItem