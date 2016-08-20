const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoApp = require('todo-app');

describe('Todo App', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'Watch a movie';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it(' toggle completed value when handleToggle called and check completed at is set', () => {
    const todoData = {
      id: 11,
      text: 'Test application',
      completed: false,
      createdAt: 0,
      completedAt: null
    };

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it(' toggle completed value when handleToggle called and check completed at is not set', () => {
    const todoData = {
      id: 11,
      text: 'Test application',
      completed: true,
      createdAt: 0,
      completedAt: 0
    };

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
