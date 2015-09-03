"use strict";

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a mike.
      </div>
    );
}
});

React.render(<App />,document.getElementById('app'));
