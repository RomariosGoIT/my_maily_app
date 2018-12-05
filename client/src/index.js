import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);

// const survey = {title: 'my title', subject: 'my subject', recipients: 'romantgt@gmail.com', body: 'heres the body of email'}
// axios.post('api/surveys/', survey)

//new sg_key = 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
