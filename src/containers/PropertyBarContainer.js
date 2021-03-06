import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PropertyBar from '../components/PropertyBar/PropertyBar';
import * as actions from '../actions/index';

// ----------------------------------------------------------------------

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
};

const PropertyBarContainer = props => <PropertyBar {...props} />;

PropertyBarContainer.propTypes = propertyBarPropTypes;

const mapDispatchToProps = dispatch => {
  return {
    handleDeleteItem: (selectedItemId) => dispatch(actions.DeleteItem(selectedItemId)),
    handleSelectEditItem: (id) => dispatch(actions.SelectEditItem(id))
  }
}

export default connect(null, mapDispatchToProps)(PropertyBarContainer);
