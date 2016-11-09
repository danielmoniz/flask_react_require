define(function(require, exports, module) {
  var React = require("react");
  var ReactBootstrap = require("react-bootstrap");
  var Button = ReactBootstrap.Button;
  
  var Test = React.createClass({
    render: function() {
      return (
        <div>
          <h3>React.js FTW</h3>
          <Button>React.js FTW</Button>
        </div>
      )
    }
  });

  module.exports = {
  	test: Test
  };
})