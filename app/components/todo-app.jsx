const React = require('react');
const TodoList = require('todo-list');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Finish an online course'
        },
        {
          id: 4,
          text: 'Kiss my girlfriend'
        }
      ]
    };
  },
  render: function () {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={ todos }/>
      </div>
    );
  }
});

module.exports = TodoApp
