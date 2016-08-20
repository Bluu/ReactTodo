const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
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
        todo.completedAt = todo.completed ? moment().unix() : null;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  },
  render: function () {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={ this.handleSearch }/>
              <TodoList todos={ filteredTodos } onToggle={ this.handleToggle }/>
              <TodoForm onAddTodo={ this.handleAddTodo }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp
