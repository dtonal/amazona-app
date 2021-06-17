import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { productListReducer } from "../../reducers/productReducers";

const logger = createLogger();

const initialState = {};
const reducer = combineReducers({ productList: productListReducer, });

const composeEnhancer = compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(logger, thunk)));

export default store;