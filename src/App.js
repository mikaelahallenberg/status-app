import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/status-reducer";
import StatusView from "./views/status-view";
import ErrorBoundary from './components/error';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducers, composeEnhancer(applyMiddleware(thunk)),
);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ErrorBoundary>
        <StatusView />
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
