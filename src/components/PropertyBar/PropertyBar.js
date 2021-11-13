import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

import IconCont from '../UI/IconCont';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  propertyBar: {
    position: 'absolute',
    right: '1em',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      bottom: '-45px',
      top: 'unset'
    }
  }
}));

// ----------------------------------------------------------------------

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
};

const PropertyBar = props => {
  const classes = useStyles();
  return (
    <div className={classes.propertyBar}>
      <IconCont
        IconContWidth='IconContWidth'
        bg='#eb3738'
        delIcon={props.completed || props.canceled ? 'delIcon' : null}
        onClick={() => props.handleDeleteItem(props.id)}
      >
        <DeleteIcon />
      </IconCont>
      {props.completed || props.canceled ? null
        :
        <>
          <IconCont IconContWidth='IconContWidth' bg='#4694d3' onClick={() => props.handleSelectEditItem(props.id)}>
            <EditIcon />
          </IconCont>
          <IconCont IconContWidth='IconContWidth' bg='#eb3738' onClick={props.ItemCanceled}>
            <ClearIcon />
          </IconCont>
          <IconCont IconContWidth='IconContWidth' onClick={props.ItemCompletion}>
            <CheckIcon />
          </IconCont>
        </>
      }
    </div>
  )
};

PropertyBar.propTypes = propertyBarPropTypes;

export default PropertyBar;
