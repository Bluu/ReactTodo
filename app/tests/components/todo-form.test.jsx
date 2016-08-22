const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const { TodoForm } = require('todo-form');

describe('Todo Form', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    const todo = 'Say Hello';
    const action = {
      type: 'ADD_TODO',
      text: todo
    };
    const spy = expect.createSpy();
    const todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={ spy }/>);
    const $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    const todo = '';
    const spy = expect.createSpy();
    const todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={ spy }/>);
    const $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todo);
  });
});
