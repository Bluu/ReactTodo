const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoForm = require('todo-form');

describe('Todo Form', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should call onAddTodo if valid text entered', () => {
    const todo = 'Say Hello';
    const spy = expect.createSpy();
    const todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={ spy }/>);
    const $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todo);
  });

  it('should not call onAddTodo if not text entered', () => {
    const todo = '';
    const spy = expect.createSpy();
    const todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={ spy }/>);
    const $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todo);
  });
});
