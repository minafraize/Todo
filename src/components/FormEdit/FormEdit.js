import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Button, TextField, Grid } from '@material-ui/core';

// ----------------------------------------------------------------------

const formEditPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleEditItem: PropTypes.func.isRequired,
  handleCancelEditItem: PropTypes.func.isRequired,
};

const FormEdit = props => {
  const [itemValue, setItemValue] = useState(props.item.value);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  const handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === 'Escape') {
      props.handleCancelEditItem(ev);
    }
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  const handleEditAndResetForm = ev => {
    ev.preventDefault();

    props.handleEditItem({
      ...props.item,
      value: itemValue,
    });

    // Reset value
    setItemValue('');
  };

  return (
    <li className="form_edit__component list-group-item">
      <form method="POST" onSubmit={handleEditAndResetForm}>
        <Grid container spacing={3}>
          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              inputProps={{
                onChange: handleItemChange,
                id: "input-edit-todo-item",
                name: "edit-todo-item",
                value: itemValue,
              }} />
          </Grid>

          <Grid item xs>
            <Button
              type="submit"
              id="submit-edit-todo-item"
              variant="contained"
              color="primary"
              style={{ marginRight: '8px' }}
              disabled={!itemValue}>
              <CheckIcon />
            </Button>
            <Button
              id="cancel-edit-todo-item"
              variant="contained"
              color="secondary"
              onClick={props.handleCancelEditItem}>
              <ClearIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    </li>
  );
};

FormEdit.propTypes = formEditPropTypes;

export default FormEdit;
