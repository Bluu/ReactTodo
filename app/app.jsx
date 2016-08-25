const React = require('react');
const ReactDOM = require('react-dom');
const { hashHistory } = require('react-router');
const { Provider } = require('react-redux');

const actions = require('actions');
const store = require('configure-store').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!application-styles');

ReactDOM.render(
  <Provider store={ store }>
    { router }
  </Provider>,
  document.getElementById('app')
);
