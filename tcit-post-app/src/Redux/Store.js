import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PostReducer } from "./Reducer";
import {thunk} from 'redux-thunk';
import logger from "redux-logger";


const rootreducer=combineReducers({posts:PostReducer})
const postStore=configureStore({reducer:rootreducer, middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk)})
export default postStore;