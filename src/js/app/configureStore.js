//import { createStore, applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import rootReducer from './reducers';


// Middleware you want to use in production:  <-- TODO esto no se que onda!
//const enhancer = applyMiddleware(promise);

export default function configureStore() {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
    return createStore(rootReducer);
}

