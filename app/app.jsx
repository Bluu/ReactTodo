const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const { Provider } = require('react-redux');

const TodoApp = require('todo-app');
const actions = require('actions');
const store = require('configure-store').configure();
const TodoAPI = require('todo-api');

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!application-styles');

ReactDOM.render(
  <Provider store={ store }>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
