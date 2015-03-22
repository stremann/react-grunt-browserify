/** @jsx React.DOM */

var React = require('react');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="RT-commentContent">
        <div className="RT-commentContent__author">
          {this.props.author}
        </div>
        <span className="RT-commentContent__body">{this.props.children.toString()}</span>
      </div>
    );
  }
});

module.exports = Comment;
