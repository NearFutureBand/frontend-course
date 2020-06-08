import React from 'react';
import Navigator from './navigation';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import {PersistGate} from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persitor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
