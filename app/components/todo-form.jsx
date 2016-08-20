const React = require('react');

const TodoForm = React.createClass({
  addTodo: function (e) {
    e.preventDefault();

    const todo = this.refs.todo.value;

    if (todo.length) {
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div className="container-footer">
        <form onSubmit={ this.addTodo }>
          <input type="text" ref="todo" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
