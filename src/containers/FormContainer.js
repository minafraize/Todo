import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form/Form';
import * as actions from '../actions/index';

// ----------------------------------------------------------------------

const formPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

const FormContainer = props => <Form {...props} />;

FormContainer.propTypes = formPropTypes;

const mapDispatchToProps = dispatch => {
  return {
    handleAddItem: (itemValue) => dispatch(actions.AddItem(itemValue)),
  }
}


export default connect( null,mapDispatchToProps)(FormContainer);
