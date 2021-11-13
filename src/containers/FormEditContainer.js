import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormEdit from '../components/FormEdit/FormEdit';
import * as actions from '../actions/index';

// ----------------------------------------------------------------------

const formEditPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    canceled: PropTypes.bool.isRequired,
  }).isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
};

const FormEditContainer = props => <FormEdit {...props} />;

FormEditContainer.propTypes = formEditPropTypes;

const mapDispatchToProps = dispatch => {
  return {
    handleCancelEditItem: () => dispatch(actions.CancelEditItem()),
    handleEditItem: (modifiedItem) => dispatch(actions.EditItem(modifiedItem)),
  }
}

export default connect( null,mapDispatchToProps)(FormEditContainer);
