const React = require('react');
const { connect } = require('react-redux');

import TodoItem from 'todo-item';

export const TodoList = React.createClass({
  render: function () {
    const { todos } = this.props;

    const renderTodos = () => {
      if (!todos.length) {
          return <p className="container-message">Nothing To Do</p>;
      }

      return todos.map(todo => <TodoItem key={todo.id} {...todo} />);
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
