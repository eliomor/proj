/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { LogBox } from "react-native";
import ReduxThunk from 'redux-thunk';

import ScoresReducer from './store/reducer';

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const rootReducer = combineReducers({
  scores: ScoresReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
);


AppRegistry.registerComponent(appName, () => Root);
