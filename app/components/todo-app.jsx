const React = require('react');
const uuid = require('node-uuid');

const TodoList = require('todo-list');
const TodoForm = require('todo-form');
const TodoSearch = require('todo-search');
const TodoAPI = require('todo-api');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
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
  handleToggle: function (id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  render: function () {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={ this.handleSearch }/>
        <TodoList todos={ todos } onToggle={ this.handleToggle }/>
        <TodoForm onAddTodo={ this.handleAddTodo }/>
      </div>
    );
  }
});

module.exports = TodoApp
