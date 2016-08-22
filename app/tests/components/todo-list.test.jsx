const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');
const { Provider } = require('react-redux');

import { configure } from 'configure-store';
import ConnectedTodoList, { TodoList } from 'todo-list';
import ConnectedTodo, { TodoItem } from 'todo-item';

describe('Todo List', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one TodoItem component tor each todo', () => {
    const TODOS = [
      {
        id: 1,
        text: 'Walk the dog',
        completed: false,
        completedAt: null,
        createdAt: 500
      },
      {
        id: 2,
        text: 'Clean the yard',
        completed: false,
        completedAt: null,
        createdAt: 500
      }
    ];

    const STORE = configure({
      todos: TODOS
    });

    const PROVIDER = TestUtils.renderIntoDocument(
      <Provider store={ STORE }>
        <ConnectedTodoList/>
      </Provider>
    );
    const TODO_LIST = TestUtils.scryRenderedComponentsWithType(PROVIDER, ConnectedTodoList)[0];
    const TODOS_COMPONENTS = TestUtils.scryRenderedComponentsWithType(TODO_LIST, ConnectedTodo);

    expect(TODOS_COMPONENTS.length).toBe(TODOS.length);
  });

  it('should render empty message if no todos', () => {
    const TODOS = [];

    const TODO_LIST = TestUtils.renderIntoDocument(<TodoList todos={ TODOS }/>);
    const $EL = $(ReactDOM.findDOMNode(TODO_LIST));

    expect($EL.find('.container-message').length).toBe(1);
  });
});
