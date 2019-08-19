import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        return (
            <div>
                <div><b>{this.props.title}</b></div>
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