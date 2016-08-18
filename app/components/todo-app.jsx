const React = require('react');
const TodoList = require('todo-list');
const TodoForm = require('todo-form');
const TodoSearch = require('todo-search');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Finish an online course'
        },
        {
          id: uuid(),
          text: 'Kiss my girlfriend'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
        }
      ]
    });
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
