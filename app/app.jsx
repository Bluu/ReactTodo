const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const { Provider } = require('react-redux');

import Login from 'login';
import TodoApp from 'todo-app';
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
    <Router history={ hashHistory }>
      <Route path="/">
        <IndexRoute component={ Login }/>
        <Route path="todos" component={ TodoApp }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
