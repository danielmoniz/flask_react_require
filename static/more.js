define(function(require, exports, module) {
  var React = require("react");
  
  var More = React.createClass({
    render: function() {
      return (
        <div>
          <h3>more stuff here!!</h3>
        </div>
      )
    }
  });

  module.exports = {
  	more: More
  };
})