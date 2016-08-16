const React = require('react');

const TodoItem = React.createClass({
  render: function () {
    const { id, text } = this.props;

    return (
      <div>
        { id + '. ' + text }
      </div>
    );
  }
});

module.exports = TodoItem;
