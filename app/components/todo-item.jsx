const React = require('react');
const moment = require('moment');

const TodoItem = React.createClass({
  render: function () {
    const { id, text, completed, createdAt, completedAt } = this.props;

    const renderDate = () => {
      const message = completed ? 'Completed ' : 'Created ';
      const timestamp = completed ? completedAt : createdAt;

      return `${message}${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
    };

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={ completed }/>
        <p>{ text }</p>
        <p>{ renderDate() }</p>
      </div>
    );
  }
});

module.exports = TodoItem;
