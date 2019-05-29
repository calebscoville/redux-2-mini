import {createStore, applyMiddleware } from 'redux'
import hackerNewsReducer from './hackerNewsReducer'
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(hackerNewsReducer, applyMiddleware(promiseMiddleware))