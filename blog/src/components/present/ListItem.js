import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class ListItem extends Component {
    render() {
        return (
            <div>
                <div><Link to={`/news/${this.props.data.id}`}><b>{this.props.data.title}</b></Link></div>
                <div>{this.props.data.text}</div>
            </div>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })

};

export default ListItem;