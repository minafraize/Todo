import { v1 } from 'uuid';
import * as actionTypes from '../actions/actionTypes';

const TodosReducer = (state, action) => {

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date();
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  let hr = d.getHours();
  let min = d.getMinutes();
  let ampm = "AM";
  if (min < 10) min = "0" + min;
  if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  }
  if (hr < 10) hr = "0" + hr;
  const date = month + " " + day + ', ' + year + " " + hr + ":" + min + " " + ampm;

  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const id = v1();
      const todoItem = {
        value: action.payload.value,
        id,
        completed: false,
        canceled: false,
        date: date
      };

      const found = state.items.some(el => el.value === todoItem.value);

      return { ...state, items: !found ? [...state.items, todoItem] : [...state.items] };
    }

    case actionTypes.CANCEL_EDIT_ITEM: {
      const newState = state.items.length ? { ...state, editingItem: {} } : { ...state };
      return newState;
    }

    case actionTypes.DELETE_ITEM: {
      const items = state.items.filter(({ id }) => id !== action.payload.id);
      return { ...state, items };
    }

    case actionTypes.EDIT_ITEM: {
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          item.value = action.payload.modifiedItem.value;
          item.date = date
        }

        return item;
      });

      return { ...state, items, editingItem: {} };
    }

    case actionTypes.ITEM_COMPLETION: {
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          const newItem = { ...item };
          newItem.completed = !newItem.completed;
          return newItem;
        }

        return item;
      });

      return { ...state, items };
    }

    case actionTypes.ITEM_CANCELED: {
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          const newItem = { ...item };
          newItem.canceled = !newItem.canceled;
          return newItem;
        }

        return item;
      });

      return { ...state, items };
    }

    case actionTypes.SELECT_EDIT_ITEM: {
      const item = state.items.find(({ id }) => id === action.payload.id);
      return { ...state, editingItem: item };
    }

    case actionTypes.REORDER_ITEM: {
      const clone = [...state.items];
      const [removed] = clone.splice(action.payload.initialPosition, 1);
      clone.splice(action.payload.newPosition, 0, removed);

      return { ...state, items: clone };
    }

    default: {
      return state;
    }
  }
};

export default TodosReducer;
