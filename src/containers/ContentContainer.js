import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Content from '../components/Content/Content';
import * as actions from '../actions/index';

// ----------------------------------------------------------------------

const contentPropTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      canceled: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  editingItem: PropTypes.shape({
    date: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
    canceled: PropTypes.bool,
  }).isRequired,
  handleReorderItem: PropTypes.func.isRequired,
};

const ContentContainer = props => <Content {...props} />;

ContentContainer.propTypes = contentPropTypes;


const mapStateToProps = state => {
  return {
    items: state.items,
    editingItem: state.editingItem,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleReorderItem: (initialPosition, newPosition) => dispatch(actions.ReorderItem(initialPosition, newPosition)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
