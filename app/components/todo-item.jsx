const React = require('react');

const TodoItem = React.createClass({
  render: function () {
    const { id, text, completed } = this.props;

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={ completed }/>
        { text }
      </div>
    );
  }
});

module.exports = TodoItem;
