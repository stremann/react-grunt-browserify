/** @jsx React.DOM */

var React = require('react');

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return;
  },

  render: function() {
    return (
      <form className="RT-commentBox__form" onSubmit={ this.handleSubmit }>
        <input className="RT-commentForm RT-commentForm__author form-control" placeholder="Enter your name here..." ref="author" />
        <input className="RT-commentForm RT-commentForm__body form-control" placeholder="Leave your message here..."ref="text" />
        <input className="RT-commentForm btn btn-primary btn-raised" type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;
