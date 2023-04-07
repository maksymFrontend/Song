import logo from './logo.svg';
import './App.scss';
import thunk from 'redux-thunk';
import {Provider, connect}   from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import React, {useState, useMemo, useRef, useEffect} from 'react';
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom';


import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {arrayMoveImmutable} from 'array-move';
import { wait } from '@testing-library/user-event/dist/utils';


import { Root } from './components/Root'
import { store } from './reducers/createStore'
import { history } from './helpers'


const REACT_VERSION = React.version;
console.log(REACT_VERSION) // 17.0.2

//I have corrected the error. Now you can upload a photo
//Now you can't add a playlist with empty fields, or even register, etc., except for the search.
console.log('I have corrected the error. Now you can upload a photo. Now you can\'t add a playlist with empty fields, or even register, etc., except for the search.')

function App(){

  return (
    <>
      <Router history={history}>
        <Provider store={store}>
          <Root/>
        </Provider>
      </Router>
    </>
  )

}

export default App;
