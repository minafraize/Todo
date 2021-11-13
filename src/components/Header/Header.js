import React from 'react';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const headerPropTypes = {
  className: PropTypes.string,
};

const Header = ({ className }) => <h2 className={className}>Todo List</h2>;

Header.propTypes = headerPropTypes;

export default Header;
