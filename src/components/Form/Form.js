import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@material-ui/core';

// ----------------------------------------------------------------------

const formPropTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

const Form = ({ handleAddItem, CloseModal }) => {
  const [itemValue, setItemValue] = useState('');

  const handleSubmitAndResetForm = ev => {
    ev.preventDefault();

    handleAddItem(itemValue);

    // Reset value
    setItemValue('');
    CloseModal();
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  return (
    <div>
      <form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
        <Grid container spacing={3}>
          <Grid item xs>
            <input
              type="text"
              className="form-control"
              id="new-todo-item"
              name="new-todo-item"
              placeholder="Type any task..."
              aria-label="Todo item description"
              value={itemValue}
              onChange={handleItemChange}
              autoFocus
            />
          </Grid>
          <Button color="primary" type="submit" disabled={!itemValue}>add</Button>
          <Button color="secondary" onClick={CloseModal}>cancel</Button>
        </Grid>
      </form>
    </div>
  );
};

Form.propTypes = formPropTypes;

export default Form;
