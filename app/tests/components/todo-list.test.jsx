const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoList = require('todo-list');
const TodoItem = require('todo-item');

describe('Todo List', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one TodoItem component tor each todo', () => {
    const TODOS = [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'Clean the yard'
      }
    ];

    const TODO_LIST = TestUtils.renderIntoDocument(<TodoList todos={ TODOS }/>);
    const TODOS_COMPONENTS = TestUtils.scryRenderedComponentsWithType(TODO_LIST, TodoItem);

    expect(TODOS_COMPONENTS.length).toBe(TODOS.length);
  });

  it('should render empty message if no todos', () => {
    const TODOS = [];

    const TODO_LIST = TestUtils.renderIntoDocument(<TodoList todos={ TODOS }/>);
    const $EL = $(ReactDOM.findDOMNode(TODO_LIST));

    expect($EL.find('.container-message').length).toBe(1);
  });
});
