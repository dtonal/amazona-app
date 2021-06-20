import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { productListReducer, productDetailsReducer } from "../../reducers/productReducers";

interface Store {

}

const logger = createLogger();

const initialState = {};
const reducer = combineReducers({ productList: productListReducer, productDetails: productDetailsReducer });

const composeEnhancer = compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(logger, thunk)));

export default store;
export type RootState = ReturnType<typeof store.getState>