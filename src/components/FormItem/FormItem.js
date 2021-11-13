import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import PropertyBarContainer from '../../containers/PropertyBarContainer';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  todoItem: {
    position: 'relative',
    padding: '1.5rem 1.3rem',
    borderRadius: '20px',
    listStyle: 'none',
    marginBottom: theme.spacing(3)
  },
  todoDate: { fontSize: '13px', color: '#afafaf' },
  todoValue: {
    width: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& span': { fontWeight: 600, fontSize: '18px' },
    [theme.breakpoints.down('md')]: {
      width: '70%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  statusCompleted: {
    backgroundColor: '#1de90e',
    color: '#fff',
    '& span': { color: '#fff' }
  },
  statusCanceled: {
    backgroundColor: '#eb3738',
    color: '#fff',
    '& span': { color: '#fff' }
  }
}));

// ----------------------------------------------------------------------

const formItemPropTypes = {
  item: PropTypes.shape({
    date: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    canceled: PropTypes.bool.isRequired,
  }).isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
  handleItemCanceled: PropTypes.func.isRequired,
};

const FormItem = props => {
  const classes = useStyles();

  let liClass = "";

  if (props.item.completed) liClass = classes.statusCompleted;
  else if (props.item.canceled) liClass = classes.statusCanceled;

  return (
    <li className={classes.todoItem + " " + liClass}>
      <span className={classes.todoDate}>{props.item.date}</span>
      <div className={classes.todoValue}> <span>{props.item.value}</span> </div>
      <PropertyBarContainer
        id={props.item.id}
        ItemCompletion={() => props.handleItemCompletion(props.item)}
        ItemCanceled={() => props.handleItemCanceled(props.item)}
        completed={props.item.completed}
        canceled={props.item.canceled}
      />
    </li>
  );
};

FormItem.propTypes = formItemPropTypes;

export default FormItem;
