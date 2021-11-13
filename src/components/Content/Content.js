import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddIcon from '@material-ui/icons/Add';

import FormContainer from '../../containers/FormContainer';
import FormEditContainer from '../../containers/FormEditContainer';
import FormItemContainer from '../../containers/FormItemContainer';
import Modal from '../UI/Dialog';
import IconCont from '../UI/IconCont';

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

const Content = props => {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false)
  };

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    props.handleReorderItem(result.source.index, result.destination.index);
  };

  return (
    <div className={props.className}>
      {props.items.length ?
        <ul>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {provided => (
                <div ref={provided.innerRef}>
                  {props.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {provided => (
                        <div
                          ref={provided.innerRef}
                          data-testid="content-draggable-item"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          {props.editingItem.id === item.id ? (
                            <FormEditContainer item={item} />
                          ) : (
                            <FormItemContainer item={item} />
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </ul>
        :
        <p> Start adding new tasks </p>}
      <IconCont onClick={() => setOpen(true)}> <AddIcon /> </IconCont>
      <Modal open={open} handleClose={handleCloseModal}>
        <FormContainer CloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

Content.propTypes = contentPropTypes;

export default Content;
