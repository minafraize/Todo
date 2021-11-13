import { LOCALSTORAGE_NAME } from '../constants';

import * as actionTypes from '../actions/actionTypes';


const LocalStorageReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STATE_LOCALSTORAGE: {
      const localStorageState = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_NAME));

      if (localStorageState) {
        return { ...state, items: localStorageState };
      }
      return state;
    }

    case actionTypes.SAVE_STATE_LOCALSTORAGE: {
      if (action.payload.state.length === 0) {
        window.localStorage.removeItem(LOCALSTORAGE_NAME);
      } else {
        window.localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(action.payload.state));
      }

      return state;
    }

    default: {
      return state;
    }
  }
};

export default LocalStorageReducer;
