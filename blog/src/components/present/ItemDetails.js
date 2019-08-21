import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemDetails extends Component {

    render(){
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.body}</p>
            </div>
        )
    }
}

ItemDetails.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })

};

export default ItemDetails;