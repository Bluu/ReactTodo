const React = require('react');
const { connect } = require('react-redux');

const actions = require('actions');

export const TodoForm = React.createClass({
  addTodo: function (e) {
    e.preventDefault();
    
    const { dispatch } = this.props;
    const todo = this.refs.todo.value;

    if (todo.length) {
      this.refs.todo.value = '';
      dispatch(actions.addTodo(todo));
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

export default connect()(TodoForm);
