const React = require('react');
const TodoItem = require('todo-item');

const TodoList = React.createClass({
  render: function () {
    const { todos } = this.props;

    const renderTodos = () => {
      if (!todos.length) {
          return <p className="container-message">Nothing To Do</p>;
      }

      return todos.map(todo => <TodoItem key={todo.id} {...todo} onToggle={ this.props.onToggle }/>);
    };

    return (
      <div>
        { renderTodos() }
      </div>
    );
  }
});

module.exports = TodoList;
