const React = require('react');
const moment = require('moment');
const { connect } = require('react-redux');

const actions = require('actions');

export const TodoItem = React.createClass({
  render: function () {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () => {
      const message = completed ? 'Completed ' : 'Created ';
      const timestamp = completed ? completedAt : createdAt;

      return `${message}${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
    };

    return (
      <div className={ todoClassName } onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={ completed }/>
        </div>
        <div>
          <p>{ text }</p>
          <p className="todo-subtext">{ renderDate() }</p>
        </div>
      </div>
    );
  }
});

export default connect()(TodoItem);
