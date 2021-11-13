import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

import './App.css';

import Header from './components/Header/Header';
import ContentContainer from './containers/ContentContainer';
import * as actions from './actions/index';

// ----------------------------------------------------------------------

const App = props => {
  const { handleLoadStateLocalStorage, handleSaveStateLocalStorage, items } = props;
  const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);
  const previousItemsLength = useRef(null);

  useEffect(() => {
    handleLoadStateLocalStorage();
    setIsLocalStorageLoaded(true);
  }, [handleLoadStateLocalStorage]);

  useEffect(() => {
    if (isLocalStorageLoaded) {
      if (!previousItemsLength.current) {
        previousItemsLength.current = -1;
        return;
      }

      if (items.length !== previousItemsLength.current) {
        handleSaveStateLocalStorage(items);
        if (items.length === 0) {
          previousItemsLength.current = -1;
        } else {
          previousItemsLength.current = items.length;
        }
      }
    }
  }, [handleSaveStateLocalStorage, items, isLocalStorageLoaded]);

  return (
    <div className="app__container" >
      <Container>
        <Header className="app__header" />
        <ContentContainer className="app__content" />
      </Container>
    </div >
  );
};


const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => {
  return {
    handleLoadStateLocalStorage: () => dispatch(actions.LoadStateLocalStorage()),
    handleSaveStateLocalStorage: (state) => dispatch(actions.SaveStateLocalStorage(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
