const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const TodoItem = require('todo-item');

describe('Todo Item', () => {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    const todoData = {
      id: 199,
      text: 'Walk the dog',
      completed: true
    };

    const spy = expect.createSpy();
    const todoItem = TestUtils.renderIntoDocument(<TodoItem { ...todoData } onToggle={ spy }/>);
    const $el = $(ReactDOM.findDOMNode(todoItem));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
  });
});
