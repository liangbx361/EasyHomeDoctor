/**
 * Created by developer on 17/1/15.
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configure-store';

import Application from './container/Application'

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Application />
    </Provider>
);

export default Root;