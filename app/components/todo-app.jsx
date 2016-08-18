const React = require('react');
const TodoList = require('todo-list');
const TodoForm = require('todo-form');
const TodoSearch = require('todo-search');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddTodo: function (text) {
    alert(`new todo: ${text}`);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch }/>
        <TodoList todos={ todos }/>
        <TodoForm onAddTodo={ this.handleAddTodo }/>
      </div>
    );
  }
});

module.exports = TodoApp
