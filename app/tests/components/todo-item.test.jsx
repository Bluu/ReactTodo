const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');

const { TodoItem } = require('todo-item');

describe('Todo Item', () => {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    const todoData = {
      id: 199,
      text: 'Walk the dog',
      completed: true
    };

    const spy = expect.createSpy();
    const todoItem = TestUtils.renderIntoDocument(<TodoItem { ...todoData } dispatch={ spy } />);
    const $el = $(ReactDOM.findDOMNode(todoItem));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });
});
