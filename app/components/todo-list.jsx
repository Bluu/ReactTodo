const React = require('react');
const { connect } = require('react-redux');

import TodoItem from 'todo-item';
const TodoAPI = require('todo-api');

export const TodoList = React.createClass({
  render: function () {
    const { todos, showCompleted, searchText } = this.props;

    const renderTodos = () => {
      if (!todos.length) {
          return <p className="container-message">Nothing To Do</p>;
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map(todo => <TodoItem key={todo.id} {...todo} />);
    };

    return (
      <div>
        { renderTodos() }
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
