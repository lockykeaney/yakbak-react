import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const configureStore = (initalState) => {
	return createStore(
		rootReducer,
		initalState,
		compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
	)
}

/* eslint-enable */
export default configureStore;
