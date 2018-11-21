import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger'

const initialState = {};

const logger = createLogger({
    collapsed: true,
    diff: true
})

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

export default store;