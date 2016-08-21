const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');
const TodoApp = require('todo-app');

const actions = require('actions');
const store = require('configure-store').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the room'));
store.dispatch(actions.setSearchText('room'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!application-styles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
