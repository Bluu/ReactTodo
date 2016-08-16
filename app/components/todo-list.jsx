const React = require('react');
const TodoItem = require('todo-item');

const TodoList = React.createClass({
  render: function () {
    const { todos } = this.props;

    const renderTodos = () => {
      return todos.map(todo => <TodoItem key={todo.id} {...todo}/>);
    };

    return (
      <div>
        { renderTodos() }
      </div>
    );
  }
});

module.exports = TodoList;
