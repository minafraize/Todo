import * as actionTypes from './actionTypes';

export const AddItem = itemValue => ({
    type: actionTypes.ADD_ITEM,
    payload: { value: itemValue },
});

export const CancelEditItem = () => ({
    type: actionTypes.CANCEL_EDIT_ITEM,
    payload: {},
});

export const DeleteItem = selectedItemId => ({
    type: actionTypes.DELETE_ITEM,
    payload: { id: selectedItemId },
});

export const EditItem = modifiedItem => ({
    type: actionTypes.EDIT_ITEM,
    payload: { modifiedItem },
});

export const ItemCompletion = modifiedItem => ({
    type: actionTypes.ITEM_COMPLETION,
    payload: { modifiedItem },
});

export const ItemCanceled = modifiedItem => ({
    type: actionTypes.ITEM_CANCELED,
    payload: { modifiedItem },
});

export const LoadStateLocalStorage = () => ({
    type: actionTypes.LOAD_STATE_LOCALSTORAGE,
    payload: {},
});

export const ReorderItem = (initialPosition, newPosition) => ({
    type: actionTypes.REORDER_ITEM,
    payload: { initialPosition, newPosition },
});

export const SaveStateLocalStorage = state => ({
    type: actionTypes.SAVE_STATE_LOCALSTORAGE,
    payload: { state },
});

export const SelectEditItem = id => ({
    type: actionTypes.SELECT_EDIT_ITEM,
    payload: { id },
});