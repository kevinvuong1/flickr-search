// SearchForm is the form used to search for images.
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SearchForm extends Component {
    handleTagSubmit = ({tag}) => {
        this.props.fetchImages(tag);
    };

    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.handleTagSubmit)}>
                    <label htmlFor="tag">Search by Tag</label>
                    <Field
                            component="input"
                            type="text"
                            label="Search By Tag"
                            name="tag"
                            placeholder="Search..."
                    />
                    <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                    >SEARCH</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({...actions}, dispatch);
}

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'searchForm'
})(SearchForm));