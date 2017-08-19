// SearchView is the area that contains all the cards
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageCard from './ImageCard';

class SearchView extends Component {
    render() {
        let imageCards;
        if(this.props.images) {
            imageCards = this.props.images.map( (image, i) =>
                <ImageCard
                    title={image.title}
                    media={image.media.m}
                    key={i}
                />
            );
        }

        return(
            <div className="row">{imageCards}</div>
        );
    }
}

function mapStateToProps(state){
    return {...state.images};
}

export default connect(mapStateToProps)(SearchView);

